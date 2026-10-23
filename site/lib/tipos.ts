export type Estado = "em vigor" | "alterada" | "revogada";

export interface LeiMeta {
    slug: string;
    tipo: string; // "Lei", "Regulamento", ...
    titulo: string;
    numero: string;
    data_publicacao: string; // AAAA-MM-DD
    estado: Estado;
    tema: string[];
    fonte_oficial?: string;
    verificado_em?: string;
}

export interface Lei extends LeiMeta {
    conteudo: string; // Markdown sem o cabeçalho
}
