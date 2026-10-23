import {capitalizar} from "@/lib/formatar";

interface Props {
    estados: string[];
    temas: string[];
    estado: string;
    tema: string;
    onEstado: (v: string) => void;
    onTema: (v: string) => void;
    tipos?: string[];
    tipo?: string;
    onTipo?: (v: string) => void;
}

function Pilulas({rotulo, valores, atual, onSel}: {
    rotulo: string;
    valores: string[];
    atual: string;
    onSel: (v: string) => void
}) {
    return (
        <div className="grp">
            <span>{rotulo}</span>
            {["todos", ...valores].map((v) => (
                <button key={v} type="button" className={`pill${v === atual ? " on" : ""}`} onClick={() => onSel(v)}>
                    {capitalizar(v)}
                </button>
            ))}
        </div>
    );
}

export function Filtros({estados, temas, estado, tema, onEstado, onTema, tipos, tipo, onTipo}: Props) {
    return (
        <div className="filtros">
            <Pilulas rotulo="Estado:" valores={estados} atual={estado} onSel={onEstado}/>
            <div className="sep"/>
            <Pilulas rotulo="Tema:" valores={temas} atual={tema} onSel={onTema}/>
            {tipos && (
                <>
                    <div className="sep"/>
                    <Pilulas rotulo="Tipo:" valores={tipos} atual={tipo || "todos"} onSel={onTipo!}/>
                </>
            )}
        </div>
    );
}
