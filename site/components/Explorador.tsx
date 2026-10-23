"use client";

import {useMemo, useState} from "react";
import type {LeiMeta} from "@/lib/tipos";
import {Hero} from "./Hero";
import {Filtros} from "./Filtros";
import {LeiCard} from "./LeiCard";

// ignora acentos e maiúsculas: "protecção" encontra "proteccao"
const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function Explorador({leis, actualizado}: { leis: LeiMeta[]; actualizado: string }) {
    const [q, setQ] = useState("");
    const [estado, setEstado] = useState("todos");
    const [tema, setTema] = useState("todos");
    const [tipo, setTipo] = useState("todos");

    const estados = useMemo(() => [...new Set(leis.map((l) => l.estado))], [leis]);
    const temas = useMemo(
        () => [...new Set(leis.flatMap((l) => l.tema))].sort((a, b) => a.localeCompare(b, "pt")),
        [leis],
    );
    const tipos = ["Lei", "Regulamento"];

    const resultados = useMemo(() => {
        const termo = norm(q.trim());
        return leis.filter((l) => {
            if (estado !== "todos" && l.estado !== estado) return false;
            if (tema !== "todos" && !l.tema.includes(tema)) return false;
            if (tipo !== "todos" && l.tipo !== tipo) return false;
            if (!termo) return true;
            return norm([l.titulo, l.numero, l.tema.join(" "), l.tipo].join(" ")).includes(termo);
        });
    }, [leis, q, estado, tema, tipo]);

    return (
        <>
            <Hero
                total={leis.length}
                emVigor={leis.filter((l) => l.estado === "em vigor").length}
                actualizado={actualizado}
                q={q}
                onQ={setQ}
            />
            <main id="leis">
                <h2>
                    Legislação disponível{" "}
                    <small>({resultados.length} {resultados.length === 1 ? "resultado" : "resultados"})</small>
                </h2>
                <Filtros estados={estados} temas={temas} estado={estado} tema={tema} onEstado={setEstado}
                         onTema={setTema} tipos={tipos} tipo={tipo} onTipo={setTipo}/>
                <div className="grid">
                    {resultados.length ? (
                        resultados.map((l) => <LeiCard key={l.slug} lei={l}/>)
                    ) : (
                        <div className="vazio">Nenhum documento encontrado.</div>
                    )}
                </div>
            </main>
        </>
    );
}
