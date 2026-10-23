import type {Estado} from "@/lib/tipos";

export function EstadoBadge({estado}: { estado: Estado }) {
    const cls = estado === "em vigor" ? "" : estado;
    return (
        <span className={`badge ${cls}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,.28)"/>
        <path d="m5 8.2 2 2 4-4.4" stroke="#fff" strokeWidth="1.6" fill="none"/>
      </svg>
            {estado}
    </span>
    );
}
