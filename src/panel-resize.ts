const STORAGE_KEY = 'bmd-viewer-panel-sizes';

interface PanelSizes {
    sidebarWidth: number;
    logBarHeight: number;
}

const DEFAULTS: PanelSizes = {
    sidebarWidth: 372,
    logBarHeight: 120,
};

function loadSizes(): PanelSizes {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { ...DEFAULTS };
        const parsed = JSON.parse(raw) as Partial<PanelSizes>;
        return {
            sidebarWidth:
                typeof parsed.sidebarWidth === 'number'
                    ? Math.max(240, Math.min(600, parsed.sidebarWidth))
                    : DEFAULTS.sidebarWidth,
            logBarHeight:
                typeof parsed.logBarHeight === 'number'
                    ? Math.max(36, Math.min(500, parsed.logBarHeight))
                    : DEFAULTS.logBarHeight,
        };
    } catch {
        return { ...DEFAULTS };
    }
}

function saveSizes(sizes: PanelSizes): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sizes));
}

function applySidebarWidth(sidebar: HTMLElement, width: number): void {
    sidebar.style.width = `${width}px`;
    // CSS variable used by .sidebar.closed transform
    sidebar.style.setProperty('--sidebar-w', `${width}px`);
}

function applyLogBarHeight(logBar: HTMLElement, height: number): void {
    logBar.style.height = `${height}px`;
}

function initSidebarResize(sidebar: HTMLElement, sizes: PanelSizes): void {
    const handle = document.getElementById('sidebar-resize-handle');
    if (!handle) return;

    handle.addEventListener('mousedown', (evt) => {
        const e = evt as MouseEvent;
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = sidebar.offsetWidth;

        const onMove = (e: MouseEvent) => {
            const newWidth = Math.max(240, Math.min(600, startWidth + e.clientX - startX));
            applySidebarWidth(sidebar, newWidth);
            sizes.sidebarWidth = newWidth;
        };

        const onUp = () => {
            saveSizes(sizes);
            window.dispatchEvent(new Event('resize'));
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        };

        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'ew-resize';
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });
}

function initLogBarResize(logBar: HTMLElement, sizes: PanelSizes): void {
    const handle = document.getElementById('log-bar-resize-handle');
    if (!handle) return;

    handle.addEventListener('mousedown', (evt) => {
        const e = evt as MouseEvent;
        e.preventDefault();
        const startY = e.clientY;
        const startHeight = logBar.offsetHeight;

        const onMove = (e: MouseEvent) => {
            const newHeight = Math.max(36, Math.min(500, startHeight - (e.clientY - startY)));
            applyLogBarHeight(logBar, newHeight);
            sizes.logBarHeight = newHeight;
        };

        const onUp = () => {
            saveSizes(sizes);
            window.dispatchEvent(new Event('resize'));
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        };

        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'ns-resize';
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });
}

function formatArg(arg: unknown): string {
    if (typeof arg === 'string') return arg;
    if (arg instanceof Error) return `${arg.name}: ${arg.message}`;
    try { return JSON.stringify(arg); } catch { return String(arg); }
}

function initConsoleInterception(output: HTMLElement): void {
    const MAX_ENTRIES = 300;

    function addEntry(level: 'info' | 'warn' | 'error', args: unknown[]): void {
        const text = args.map(formatArg).join(' ');
        const entry = document.createElement('div');
        entry.className = `log-entry log-entry--${level}`;
        const time = new Date().toLocaleTimeString('pl-PL', { hour12: false });
        const timeEl = document.createElement('span');
        timeEl.className = 'log-time';
        timeEl.textContent = time;

        const messageEl = document.createElement('span');
        messageEl.className = 'log-msg';
        messageEl.textContent = text;

        entry.append(timeEl, messageEl);
        output.appendChild(entry);

        while (output.children.length > MAX_ENTRIES) {
            output.removeChild(output.firstChild!);
        }

        // Keep the newest log entry visible.
        output.scrollTop = output.scrollHeight;
    }

    const origLog   = console.log.bind(console);
    const origInfo  = console.info.bind(console);
    const origWarn  = console.warn.bind(console);
    const origError = console.error.bind(console);

    console.log   = (...args: unknown[]) => { origLog(...args);   addEntry('info',  args); };
    console.info  = (...args: unknown[]) => { origInfo(...args);  addEntry('info',  args); };
    console.warn  = (...args: unknown[]) => { origWarn(...args);  addEntry('warn',  args); };
    console.error = (...args: unknown[]) => { origError(...args); addEntry('error', args); };
}

export function initPanels(): void {
    const sidebar   = document.getElementById('sidebar');
    const logBar    = document.getElementById('log-bar');
    const logOutput = document.getElementById('log-output');

    const sizes = loadSizes();

    if (sidebar) {
        applySidebarWidth(sidebar, sizes.sidebarWidth);
        initSidebarResize(sidebar, sizes);
    }

    if (logBar) {
        applyLogBarHeight(logBar, sizes.logBarHeight);
        initLogBarResize(logBar, sizes);
    }

    if (logOutput) {
        initConsoleInterception(logOutput);
    }

    document.getElementById('log-clear-btn')?.addEventListener('click', () => {
        if (logOutput) logOutput.innerHTML = '';
    });

    document.getElementById('layout-reset-btn')?.addEventListener('click', () => {
        localStorage.removeItem(STORAGE_KEY);
        const fresh = { ...DEFAULTS };
        if (sidebar) applySidebarWidth(sidebar, fresh.sidebarWidth);
        if (logBar)  applyLogBarHeight(logBar,  fresh.logBarHeight);
        saveSizes(fresh);
        window.dispatchEvent(new Event('resize'));
    });
}
