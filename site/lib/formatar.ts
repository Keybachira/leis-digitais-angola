const MES = ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."];

/** "2011-06-17" -> "17 jun. 2011" */
export function formatarData(iso: string): string {
    const [a, m, d] = iso.split("-").map(Number);
    if (!a || !m || !d) return iso;
    return `${d} ${MES[m - 1]} ${a}`;
}

export function capitalizar(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function doisDigitos(n: number): string {
    return String(n).padStart(2, "0");
}
