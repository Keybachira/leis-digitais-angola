import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Estado, Lei, LeiMeta } from "./tipos";

// O `npm run dev` / `build` corre dentro de site/, por isso a raiz do repositório é "..".
const RAIZ = path.join(process.cwd(), "..");
const PASTAS = [
  { dir: "leis", tipo: "Lei" },
  { dir: "regulamentos", tipo: "Regulamento" },
];

/** O YAML converte datas sem aspas em objetos Date: normalizamos sempre para AAAA-MM-DD. */
function texto(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v == null ? "" : String(v);
}

export function listarLeis(): Lei[] {
  const itens: Lei[] = [];

  for (const { dir, tipo } of PASTAS) {
    const pasta = path.join(RAIZ, dir);
    if (!fs.existsSync(pasta)) continue;

    for (const ficheiro of fs.readdirSync(pasta)) {
      if (!ficheiro.endsWith(".md")) continue;
      const { data, content } = matter(fs.readFileSync(path.join(pasta, ficheiro), "utf8"));

      itens.push({
        slug: ficheiro.replace(/\.md$/, ""),
        tipo: texto(data.tipo) || tipo,
        titulo: texto(data.titulo),
        numero: texto(data.numero),
        data_publicacao: texto(data.data_publicacao),
        estado: (texto(data.estado) || "em vigor") as Estado,
        tema: Array.isArray(data.tema) ? data.tema.map(String) : [],
        fonte_oficial: texto(data.fonte_oficial) || undefined,
        verificado_em: texto(data.verificado_em) || undefined,
        conteudo: content,
      });
    }
  }

  // mais recentes primeiro
  return itens.sort((a, b) => b.data_publicacao.localeCompare(a.data_publicacao));
}

export function obterLei(slug: string): Lei | undefined {
  return listarLeis().find((l) => l.slug === slug);
}

export const listarSoLeis = () => listarLeis().filter((l) => l.tipo !== "Regulamento");
export const listarRegulamentos = () => listarLeis().filter((l) => l.tipo === "Regulamento");

/** Tira o texto completo: é o que se envia para o componente de cliente. */
export function resumos(itens: Lei[]): LeiMeta[] {
  return itens.map((l) => {
    const { conteudo, ...meta } = l;
    void conteudo;
    return meta;
  });
}

export const dataHoje = () => new Date().toISOString().slice(0, 10);
