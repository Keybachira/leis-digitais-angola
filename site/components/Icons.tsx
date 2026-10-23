type P = { size?: number };
const base = (size = 24) => ({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true,
});

export const IconePesquisa = ({size}: P) => (
    <svg {...base(size)} strokeWidth={2}>
        <circle cx="11" cy="11" r="7"/>
        <path d="m20 20-4-4"/>
    </svg>
);
export const IconeDocumento = ({size}: P) => (
    <svg {...base(size)} strokeWidth={1.5}>
        <path d="M6 3h8l5 5v13H6z"/>
        <path d="M14 3v5h5M9 13h7M9 17h7"/>
    </svg>
);
export const IconeVisto = ({size}: P) => (
    <svg {...base(size)} strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9"/>
        <path d="m8 12.5 3 3 5-6"/>
    </svg>
);
export const IconeCalendario = ({size}: P) => (
    <svg {...base(size)}>
        <rect x="3" y="5" width="18" height="16" rx="1"/>
        <path d="M3 10h18M8 3v4M16 3v4"/>
    </svg>
);
export const IconeSeta = ({size}: P) => (
    <svg {...base(size)} strokeWidth={2}>
        <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
);
export const IconeGithub = ({size = 14}: P) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
        <path
            d="M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4A8 8 0 0 0 8 0z"/>
    </svg>
);
