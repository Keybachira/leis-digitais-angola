import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {Estado, Lei, LeiMeta} from "./tipos";

// O `npm run dev` / `build` corre dentro de site/, por isso a raiz do repositório é "..".
const RAIZ = path.join(process.cwd(), "..");
const PASTAS = [
    {dir: "leis", tipo: "Lei"},
    {dir: "regulamentos", tipo: "Regulamento"},
];

/** O YAML converte datas sem aspas em objetos Date: normalizamos sempre para AAAA-MM-DD. */
function texto(v: unknown): string {
    if (v instanceof Date) return v.toISOString().slice(0, 10);
    return v == null ? "" : String(v);
}

/** Lê um único ficheiro .md e devolve metadados + conteúdo bruto. */
function lerFicheiro(dir: string, tipoDefault: string, ficheiro: string): Lei | null {
    if (!ficheiro.endsWith(".md")) return null;
    const caminhoCompleto = path.join(dir, ficheiro);
    if (!fs.existsSync(caminhoCompleto)) return null;

    const {data, content} = matter(fs.readFileSync(caminhoCompleto, "utf8"));

    return {
        slug: ficheiro.replace(/\.md$/, ""),
        tipo: texto(data.tipo) || tipoDefault,
        titulo: texto(data.titulo),
        numero: texto(data.numero),
        data_publicacao: texto(data.data_publicacao),
        estado: (texto(data.estado) || "em vigor") as Estado,
        tema: Array.isArray(data.tema) ? data.tema.map(String) : [],
        fonte_oficial: texto(data.fonte_oficial) || undefined,
        verificado_em: texto(data.verificado_em) || undefined,
        conteudo: content,
    };
}

/** Lista todas as leis (apenas metadados, sem conteúdo markdown). */
export function listarLeisMeta(): LeiMeta[] {
    const itens: LeiMeta[] = [];

    for (const {dir, tipo} of PASTAS) {
        const pasta = path.join(RAIZ, dir);
        if (!fs.existsSync(pasta)) continue;

        for (const ficheiro of fs.readdirSync(pasta)) {
            const lei = lerFicheiro(pasta, tipo, ficheiro);
            if (!lei) continue;
            const {conteudo: _, ...meta} = lei;
            itens.push(meta);
        }
    }

    // mais recentes primeiro
    return itens.sort((a, b) => b.data_publicacao.localeCompare(a.data_publicacao));
}

/** Lista todas as leis com o conteúdo markdown incluído. */
export function listarLeis(): Lei[] {
    const itens: Lei[] = [];

    for (const {dir, tipo} of PASTAS) {
        const pasta = path.join(RAIZ, dir);
        if (!fs.existsSync(pasta)) continue;

        for (const ficheiro of fs.readdirSync(pasta)) {
            const lei = lerFicheiro(pasta, tipo, ficheiro);
            if (lei) itens.push(lei);
        }
    }

    // mais recentes primeiro
    return itens.sort((a, b) => b.data_publicacao.localeCompare(a.data_publicacao));
}

/** Obtém uma lei específica pelo slug (com conteúdo). */
export function obterLei(slug: string): Lei | undefined {
    return listarLeis().find((l) => l.slug === slug);
}

/** Obtém apenas os metadados de uma lei específica pelo slug. */
export function obterLeiMeta(slug: string): LeiMeta | undefined {
    return listarLeisMeta().find((l) => l.slug === slug);
}

/** Filtra leis por tipo (Lei | Regulamento). */
export function listarPorTipo(tipo: "Lei" | "Regulamento"): LeiMeta[] {
    return listarLeisMeta().filter((l) => l.tipo === tipo);
}

/** Busca server-side por termo nos metadados (título, número, tema). */
export function buscarLeis(termo: string, filtros?: {estado?: Estado; tipo?: "Lei" | "Regulamento"}): LeiMeta[] {
    const t = termo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    return listarLeisMeta().filter((l) => {
        if (filtros?.estado && l.estado !== filtros.estado) return false;
        if (filtros?.tipo && l.tipo !== filtros.tipo) return false;
        if (!t) return true;
        const haystack = [l.titulo, l.numero, l.tema.join(" ")].join(" ")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
        return haystack.includes(t);
    });
}
