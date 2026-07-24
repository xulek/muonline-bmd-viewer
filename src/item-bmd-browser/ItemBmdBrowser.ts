import { escapeHtml } from '../utils/DomSafety';
// src/item-bmd-browser/ItemBmdBrowser.ts
import { parseItemBmd, type ItemDefinition } from '../item-bmd';

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
const KIND_A_LABELS: Record<number, string> = {
    0: 'Weapon',
    1: 'Armor',
    2: 'Potion',
    3: 'Scroll',
    4: 'Jewel',
    5: 'Misc',
};

function kindLabel(kindA: number): string {
    return KIND_A_LABELS[kindA] ?? `Kind ${kindA}`;
}

function fmtReq(v: number): string {
    return v === 0 ? '—' : `${v}`;
}

function fmtDmg(item: ItemDefinition): string {
    if (item.damageMin === 0 && item.damageMax === 0) return '—';
    return `${item.damageMin}–${item.damageMax}`;
}

function fmtDef(item: ItemDefinition): string {
    if (item.defense === 0) return '—';
    return `${item.defense}`;
}

// ------------------------------------------------------------------
// ItemBmdBrowser
// ------------------------------------------------------------------
export class ItemBmdBrowser {
    private items: ItemDefinition[] = [];
    private filtered: ItemDefinition[] = [];
    private selected: ItemDefinition | null = null;
    private searchQuery = '';
    private kindFilter = -1; // -1 = all

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
        this.noDataEl     = document.getElementById('items-no-data');
        this.tableWrapEl  = document.getElementById('items-table-wrap');
        this.tableBodyEl  = document.getElementById('items-table-body');
        this.detailEl     = document.getElementById('items-detail');
        this.statusEl     = document.getElementById('items-status-bar');
        this.loadStatusEl = document.getElementById('items-load-status');
        this.statsEl      = document.getElementById('items-stats');

        this.initDropZone();
        this.initSearch();
        this.initKindFilter();

        document.getElementById('items-clear-btn')?.addEventListener('click', () => this.clearAll());

        this.render();
    }

    // ------------------------------------------------------------------
    // File loading
    // ------------------------------------------------------------------

    private initDropZone(): void {
        const fileInput = document.getElementById('items-file-input') as HTMLInputElement | null;
        const dropZone  = document.getElementById('items-drop-zone');

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
            this.items = parseItemBmd(buf);
            if (this.loadStatusEl) {
                this.loadStatusEl.textContent = this.items.length > 0
                    ? `${this.items.length} items loaded from ${file.name}`
                    : `No items found in ${file.name}`;
            }
            if (this.statusEl) this.statusEl.textContent = `Items: ${file.name}`;
            this.selected = null;
            this.applyFilter();
            this.render();
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            if (this.loadStatusEl) this.loadStatusEl.textContent = `Failed: ${msg}`;
        }
    }

    private clearAll(): void {
        this.items    = [];
        this.filtered = [];
        this.selected = null;
        this.searchQuery = '';
        this.kindFilter  = -1;
        const searchInput = document.getElementById('items-search') as HTMLInputElement | null;
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.items-kind-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
        if (this.loadStatusEl) this.loadStatusEl.textContent = 'No file loaded.';
        if (this.statusEl)     this.statusEl.textContent     = 'Item Browser';
        if (this.statsEl)      this.statsEl.textContent      = '';
        this.render();
    }

    // ------------------------------------------------------------------
    // Filter / search
    // ------------------------------------------------------------------

    private initSearch(): void {
        const input = document.getElementById('items-search') as HTMLInputElement | null;
        input?.addEventListener('input', () => {
            this.searchQuery = input.value.trim().toLowerCase();
            this.applyFilter();
            if (this.selected && !this.filtered.includes(this.selected)) this.selected = null;
            this.render();
        });
    }

    private initKindFilter(): void {
        document.querySelectorAll<HTMLButtonElement>('.items-kind-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.kindFilter = parseInt(btn.dataset.kind ?? '-1', 10);
                document.querySelectorAll('.items-kind-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.applyFilter();
                if (this.selected && !this.filtered.includes(this.selected)) this.selected = null;
                this.render();
            });
        });
    }

    private applyFilter(): void {
        this.filtered = this.items.filter(item => {
            const matchKind = this.kindFilter === -1 || item.kindA === this.kindFilter;
            const q = this.searchQuery;
            const matchSearch = !q
                || item.itemName.toLowerCase().includes(q)
                || item.modelPath.toLowerCase().includes(q)
                || `${item.index}`.includes(q);
            return matchKind && matchSearch;
        });
        this.updateStats();
    }

    private updateStats(): void {
        if (this.statsEl) {
            this.statsEl.textContent = this.items.length === 0
                ? ''
                : `${this.filtered.length} / ${this.items.length} items`;
        }
    }

    // ------------------------------------------------------------------
    // Rendering
    // ------------------------------------------------------------------

    private render(): void {
        const hasData = this.items.length > 0;
        this.noDataEl?.classList.toggle('hidden', hasData);
        this.tableWrapEl?.classList.toggle('hidden', !hasData);
        this.detailEl?.classList.toggle('hidden', !hasData || this.selected === null);
        if (hasData) this.renderTable();
        if (hasData && this.selected) this.renderDetail();
    }

    private renderTable(): void {
        if (!this.tableBodyEl) return;
        const frag = document.createDocumentFragment();

        for (const item of this.filtered) {
            const row = document.createElement('tr');
            row.className = 'bmd-table-row';
            if (item === this.selected) row.classList.add('bmd-table-row--selected');

            row.innerHTML = [
                `<td class="bmd-tc bmd-tc--id">${item.index}</td>`,
                `<td class="bmd-tc bmd-tc--name">${item.itemName ? escapeHtml(item.itemName) : '<em>—</em>'}</td>`,
                `<td class="bmd-tc bmd-tc--kind">${kindLabel(item.kindA)}</td>`,
                `<td class="bmd-tc bmd-tc--size">${item.width}×${item.height}</td>`,
                `<td class="bmd-tc bmd-tc--dmg">${fmtDmg(item)}</td>`,
                `<td class="bmd-tc bmd-tc--def">${fmtDef(item)}</td>`,
                `<td class="bmd-tc bmd-tc--lvl">${fmtReq(item.reqLvl)}</td>`,
            ].join('');

            row.addEventListener('click', () => {
                this.selected = item === this.selected ? null : item;
                this.render();
            });

            frag.appendChild(row);
        }

        this.tableBodyEl.innerHTML = '';
        this.tableBodyEl.appendChild(frag);
    }

    private renderDetail(): void {
        if (!this.detailEl || !this.selected) return;
        const d = this.selected;

        const req = [
            d.reqStr  ? `Str ${d.reqStr}`  : '',
            d.reqDex  ? `Dex ${d.reqDex}`  : '',
            d.reqEne  ? `Ene ${d.reqEne}`  : '',
            d.reqVit  ? `Vit ${d.reqVit}`  : '',
            d.reqCmd  ? `Cmd ${d.reqCmd}`  : '',
            d.reqLvl  ? `Lvl ${d.reqLvl}`  : '',
        ].filter(Boolean).join('  ·  ') || '—';

        const classBits: string[] = [];
        // class flags are stored but we just show raw group/id
        const groupId = `${d.group} / ${d.id}`;

        this.detailEl.innerHTML = `
            <div class="bmd-detail-header">
                <span class="bmd-detail-name">${escapeHtml(d.itemName || '(unnamed)')}</span>
                <span class="bmd-detail-index">#${d.index}</span>
            </div>
            <div class="bmd-detail-grid">
                <div class="bmd-detail-field"><span class="bmd-df-label">Model</span><span class="bmd-df-val">${escapeHtml(d.modelPath || '—')}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Group / ID</span><span class="bmd-df-val">${groupId}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Kind A / B</span><span class="bmd-df-val">${d.kindA} / ${d.kindB}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Type</span><span class="bmd-df-val">${d.type}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Two-Hands</span><span class="bmd-df-val">${d.twoHands ? 'Yes' : 'No'}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Size</span><span class="bmd-df-val">${d.width} × ${d.height}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Damage</span><span class="bmd-df-val">${fmtDmg(d)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Defense</span><span class="bmd-df-val">${fmtDef(d)}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Def Rate</span><span class="bmd-df-val">${d.defenseRate || '—'}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Atk Speed</span><span class="bmd-df-val">${d.attackSpeed || '—'}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Durability</span><span class="bmd-df-val">${d.durability || '—'}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Drop Lvl</span><span class="bmd-df-val">${d.dropLevel || '—'}</span></div>
                <div class="bmd-detail-field bmd-detail-field--wide"><span class="bmd-df-label">Requirements</span><span class="bmd-df-val">${req}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Skill</span><span class="bmd-df-val">${d.skillIndex > 0 ? d.skillIndex : '—'}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Value</span><span class="bmd-df-val">${d.itemValue.toLocaleString()}</span></div>
                <div class="bmd-detail-field"><span class="bmd-df-label">Price</span><span class="bmd-df-val">${d.money.toLocaleString()}</span></div>
            </div>`;
    }
}
