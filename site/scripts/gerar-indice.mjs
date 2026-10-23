import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Reusa a mesma lógica de leitura do repositório (raiz do site é site/, raiz do repo é ..)
const raiz = path.join(process.cwd(), "..");
const pastas = [
  { dir: "leis", tipo: "Lei" },
  { dir: "regulamentos", tipo: "Regulamento" },
];

function texto(v) {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v == null ? "" : String(v);
}

const itens = pastas.flatMap(({ dir, tipo }) => {
  const pasta = path.join(raiz, dir);
  if (!fs.existsSync(pasta)) return [];
  return fs
    .readdirSync(pasta)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter.read(path.join(pasta, f));
      return {
        slug: f.replace(".md", ""),
        tipo: texto(data.tipo) || tipo,
        titulo: texto(data.titulo),
        numero: texto(data.numero),
        data_publicacao: texto(data.data_publicacao),
        estado: texto(data.estado) || "em vigor",
        tema: Array.isArray(data.tema) ? data.tema.map(String) : [],
        fonte_oficial: texto(data.fonte_oficial) || undefined,
        verificado_em: texto(data.verificado_em) || undefined,
        conteudo: content,
        ficheiro: `${dir}/${f}`,
      };
    });
});

itens.sort((a, b) => String(b.data_publicacao).localeCompare(String(a.data_publicacao)));

const saida = {
  actualizado_em: new Date().toISOString().slice(0, 10),
  total: itens.length,
  leis: itens,
};

fs.writeFileSync(
  path.join(raiz, "indice.json"),
  JSON.stringify(saida, null, 2)
);
console.log(`indice.json gerado com ${itens.length} documentos`);