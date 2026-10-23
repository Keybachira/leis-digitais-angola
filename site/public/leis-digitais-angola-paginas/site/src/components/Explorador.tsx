"use client";

import { useMemo, useState } from "react";
import type { LeiMeta } from "@/lib/tipos";
import { Hero } from "./Hero";
import { Filtros } from "./Filtros";
import { LeiCard } from "./LeiCard";

// ignora acentos e maiúsculas: "protecção" encontra "proteccao"
const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

interface Props {
  leis: LeiMeta[];
  actualizado: string;
  titulo: string;
  descricao: string;
  vazio?: string; // mensagem quando ainda não há documentos
}

export function Explorador({ leis, actualizado, titulo, descricao, vazio }: Props) {
  const [q, setQ] = useState("");
  const [estado, setEstado] = useState("todos");
  const [tema, setTema] = useState("todos");

  const estados = useMemo(() => [...new Set(leis.map((l) => l.estado))], [leis]);
  const temas = useMemo(
    () => [...new Set(leis.flatMap((l) => l.tema))].sort((a, b) => a.localeCompare(b, "pt")),
    [leis],
  );

  const resultados = useMemo(() => {
    const termo = norm(q.trim());
    return leis.filter((l) => {
      if (estado !== "todos" && l.estado !== estado) return false;
      if (tema !== "todos" && !l.tema.includes(tema)) return false;
      if (!termo) return true;
      return norm([l.titulo, l.numero, l.tema.join(" ")].join(" ")).includes(termo);
    });
  }, [leis, q, estado, tema]);

  return (
    <>
      <Hero
        total={leis.length}
        emVigor={leis.filter((l) => l.estado === "em vigor").length}
        actualizado={actualizado}
        titulo={titulo}
        descricao={descricao}
        q={q}
        onQ={setQ}
      />
      <main id="leis">
        <h2>
          Legislação disponível{" "}
          <small>({resultados.length} {resultados.length === 1 ? "resultado" : "resultados"})</small>
        </h2>
        <Filtros estados={estados} temas={temas} estado={estado} tema={tema} onEstado={setEstado} onTema={setTema} />
        <div className="grid">
          {resultados.length ? (
            resultados.map((l) => <LeiCard key={l.slug} lei={l} />)
          ) : (
            <div className="vazio">{leis.length === 0 && vazio ? vazio : "Nenhum documento encontrado."}</div>
          )}
        </div>
      </main>
    </>
  );
}
