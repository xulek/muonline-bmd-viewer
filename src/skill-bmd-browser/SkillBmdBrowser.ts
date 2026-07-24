import { escapeHtml } from '../utils/DomSafety';
// src/skill-bmd-browser/SkillBmdBrowser.ts
import { parseSkillBmd, type SkillDefinition } from '../skill-bmd';

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
function fmtNum(v: number): string {
    return v === 0 ? '—' : `${v}`;
}

function fmtMs(ms: number): string {
    if (ms <= 0) return '—';
    return ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${ms}ms`;
}

// ------------------------------------------------------------------
// SkillBmdBrowser
// ------------------------------------------------------------------
export class SkillBmdBrowser {
    private skills: Map<number, SkillDefinition> = new Map();
    private filteredIds: number[] = [];
    private selectedId: number | null = null;
    private searchQuery = '';
    private typeFilter = -1; // -1 = all; 0..3 = TypeSkill value

    // DOM refs
    private noDataEl: HTMLElement | null = null;
    private tableWrapEl: HTMLElement | null = null;
    private tableBodyEl: HTMLElement | null = null;
    private detailEl: HTMLElement | null = null;
    private statusEl: HTMLElement | null = null;
    private loadStatusEl: HTMLElement | null = null;
    private statsEl: HTMLElement | null = null;

    // ------------------------------------------------------------------
    // Public API
    // ------------------------------------------------------------------

    init(): void {
        this.noDataEl     = document.getElementById('skills-no-data');
        this.tableWrapEl  = document.getElementById('skills-table-wrap');
        this.tableBodyEl  = document.getElementById('skills-table-body');
        this.detailEl     = document.getElementById('skills-detail');
        this.statusEl     = document.getElementById('skills-status-bar');
        this.loadStatusEl = document.getElementById('skills-load-status');
        this.statsEl      = document.getElementById('skills-stats');

        this.initDropZone();
        this.initSearch();
        this.initTypeFilter();

        document.getElementById('skills-clear-btn')?.addEventListener('click', () => this.clearAll());

        this.render();
    }

    // ------------------------------------------------------------------
    // File loading
    // ------------------------------------------------------------------

    private initDropZone(): void {
        const fileInput = document.getElementById('skills-file-input') as HTMLInputElement | null;
        const dropZone  = document.getElementById('skills-drop-zone');

        fileInput?.addEventListener('change', () => {
            const file = fileInput.files?.[0];
            if (file) void this.loadFile(file);
            fileInput.value = '';
        });

        if (!dropZone) return;
        dropZone.addEventListener('click', () => fileInput?.click());
        dropZone.addEventListener('dragover', e => {
            e.preventDefault();
            dropZone.classList.add('drop-zone--active');
        });
        dropZone.addEventListener('dragleave', e => {
            if (!dropZone.contains(e.relatedTarget as Node)) {
                dropZone.classList.remove('drop-zone--active');
            }
        });
        dropZone.addEventListener('drop', e => {
            e.preventDefault();
            dropZone.classList.remove('drop-zone--active');
            const file = e.dataTransfer?.files[0];
            if (file?.name.toLowerCase().endsWith('.bmd')) void this.loadFile(file);
        });
    }

    async loadFile(file: File): Promise<void> {
        if (this.loadStatusEl) this.loadStatusEl.textContent = `Loading ${file.name}…`;
        try {
            const buf = await file.arrayBuffer();
            this.skills = parseSkillBmd(buf);
            const count = this.skills.size;
            if (this.loadStatusEl) {
                this.loadStatusEl.textContent = count > 0
                    ? `${count} skills loaded from ${file.name}`
                    : `No skills found in ${file.name}`;
            }
            if (this.statusEl) this.statusEl.textContent = `Skills: ${file.name}`;
            this.selectedId = null;
            this.applyFilter();
            this.render();
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            if (this.loadStatusEl) this.loadStatusEl.textContent = `Failed: ${msg}`;
        }
    }

    private clearAll(): void {
        this.skills      = new Map();
        this.filteredIds = [];
        this.selectedId  = null;
        this.searchQuery = '';
        this.typeFilter  = -1;
        const searchInput = document.getElementById('skills-search') as HTMLInputElement | null;
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.skills-type-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
        if (this.loadStatusEl) this.loadStatusEl.textContent = 'No file loaded.';
        if (this.statusEl)     this.statusEl.textContent     = 'Skill Browser';
        if (this.statsEl)      this.statsEl.textContent      = '';
        this.render();
    }

    // ------------------------------------------------------------------
    // Filter / search
    // ------------------------------------------------------------------

    private initSearch(): void {
        const input = document.getElementById('skills-search') as HTMLInputElement | null;
        input?.addEventListener('input', () => {
            this.searchQuery = input.value.trim().toLowerCase();
            this.applyFilter();
            if (this.selectedId !== null && !this.filteredIds.includes(this.selectedId)) {
                this.selectedId = null;
            }
            this.render();
        });
    }

    private initTypeFilter(): void {
        document.querySelectorAll<HTMLButtonElement>('.skills-type-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.typeFilter = parseInt(btn.dataset.type ?? '-1', 10);
                document.querySelectorAll('.skills-type-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.applyFilter();
                if (this.selectedId !== null && !this.filteredIds.includes(this.selectedId)) {
                    this.selectedId = null;
                }
                this.render();
            });
        });
    }

    private applyFilter(): void {
        this.filteredIds = [];
        for (const [id, skill] of this.skills) {
            const matchType   = this.typeFilter === -1 || skill.type === this.typeFilter;
            const q           = this.searchQuery;
            const matchSearch = !q
                || skill.name.toLowerCase().includes(q)
                || `${id}`.includes(q);
            if (matchType && matchSearch) this.filteredIds.push(id);
        }
        this.updateStats();
    }

    private updateStats(): void {
        if (this.statsEl) {
            const total = this.skills.size;
            this.statsEl.textContent = total === 0
                ? ''
                : `${this.filteredIds.length} / ${total} skills`;
        }
    }

    // ------------------------------------------------------------------
    // Rendering
    // ------------------------------------------------------------------

    private render(): void {
        const hasData = this.skills.size > 0;
        this.noDataEl?.classList.toggle('hidden', hasData);
        this.tableWrapEl?.classList.toggle('hidden', !hasData);
        this.detailEl?.classList.toggle('hidden', !hasData || this.selectedId === null);
        if (hasData) this.renderTable();
        if (hasData && this.selectedId !== null) this.renderDetail();
    }

    private renderTable(): void {
        if (!this.tableBodyEl) return;
        const frag = document.createDocumentFragment();

        for (const id of this.filteredIds) {
            const skill = this.skills.get(id);
            if (!skill) continue;

            const row = document.createElement('tr');
            row.className = 'bmd-table-row';
            if (id === this.selectedId) row.classList.add('bmd-table-row--selected');

            row.innerHTML = [
                `<td class="bmd-tc bmd-tc--id">${id}</td>`,
                `<td class="bmd-tc bmd-tc--name">${escapeHtml(skill.name)}</td>`,
                `<td class="bmd-tc bmd-tc--dmg">${fmtNum(skill.damage)}</td>`,
                `<td class="bmd-tc bmd-tc--mana">${fmtNum(skill.manaCost)}</td>`,
                `<td class="bmd-tc bmd-tc--ag">${fmtNum(skill.abilityCost)}</td>`,
                `<td class="bmd-tc bmd-tc--lvl">${fmtNum(skill.requiredLevel)}</td>`,
                `<td class="bmd-tc bmd-tc--type"><span class="skill-type-badge skill-type--${skill.typeLabel.replace(/[^a-z]/gi,'').toLowerCase()}">${escapeHtml(skill.typeLabel)}</span></td>`,
            ].join('');

            row.addEventListener('click', () => {
                this.selectedId = id === this.selectedId ? null : id;
                this.render();
            });

            frag.appendChild(row);
        }

        this.tableBodyEl.innerHTML = '';
        this.tableBodyEl.appendChild(frag);
    }

    private renderDetail(): void {
        if (!this.detailEl || this.selectedId === null) return;
        const s = this.skills.get(this.selectedId);
        if (!s) return;

        const req = [
            s.requiredLevel      ? `Lvl ${s.requiredLevel}`        : '',
            s.requiredStrength   ? `Str ${s.requiredStrength}`      : '',
            s.requiredDexterity  ? `Dex ${s.requiredDexterity}`     : '',
            s.requiredEnergy     ? `Ene ${s.requiredEnergy}`        : '',
            s.requiredLeadership ? `Cmd ${s.requiredLeadership}`    : '',
        ].filter(Boolean).join('  ·  ') || '—';

        const reqClass = s.requireClass
            .map((v, i) => v ? `Class ${i}: ${v}` : '')
            .filter(Boolean).join(', ') || '—';

        this.detailEl.innerHTML = `
            <div class="bmd-detail-header">
                <span class="bmd-detail-name">${escapeHtml(s.name)}</span>
                <span class="bmd-detail-index">#${s.id}</span>
            </div>
            <div class="bmd-detail-grid">
                <div class="bmd-detail-field"><span class="bmd-df-label">Type</span><span class="bmd-df-val">${escapeHtml(s.typeLabel)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Use Type</span><span class="bmd-df-val">${escapeHtml(s.skillUseTypeLabel)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Damage</span><span class="bmd-df-val">${fmtNum(s.damage)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Is Damage</span><span class="bmd-df-val">${s.isDamage ? 'Yes' : 'No'}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Mana Cost</span><span class="bmd-df-val">${fmtNum(s.manaCost)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">AG Cost</span><span class="bmd-df-val">${fmtNum(s.abilityCost)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Distance</span><span class="bmd-df-val">${fmtNum(s.distance)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Delay</span><span class="bmd-df-val">${fmtMs(s.delay)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Icon ID</span><span class="bmd-df-val">${s.magicIcon}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Effect</span><span class="bmd-df-val">${fmtNum(s.effect)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Rank</span><span class="bmd-df-val">${s.skillRank}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Mastery</span><span class="bmd-df-val">${s.masteryType}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Brand</span><span class="bmd-df-val">${s.skillBrand}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Item Skill</span><span class="bmd-df-val">${s.itemSkill}</span></div>
                <div class="bmd-detail-field bmd-detail-field--wide"><span class="bmd-df-label">Requirements</span><span class="bmd-df-val">${req}</span></div>
                <div class="bmd-detail-field bmd-detail-field--wide"><span class="bmd-df-label">Class Reqs</span><span class="bmd-df-val">${escapeHtml(reqClass)}</span></div>
            </div>`;
    }
}
