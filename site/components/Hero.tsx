import {IconeCalendario, IconeDocumento, IconePesquisa, IconeVisto} from "./Icons";
import {doisDigitos, formatarData} from "@/lib/formatar";

interface Props {
    total: number;
    emVigor: number;
    actualizado: string;
    q: string;
    onQ: (valor: string) => void;
}

export function Hero({total, emVigor, actualizado, q, onQ}: Props) {
    return (
        <section className="hero">
            <div>
                <h1>Legislação digital de Angola</h1>
                <p>Consulte legislação sobre tecnologia, dados, comunicações e segurança digital num único lugar.</p>
            </div>
            <div>
                <form className="busca" onSubmit={(e) => e.preventDefault()}>
                    <label className="campo">
                        <IconePesquisa size={22}/>
                        <input
                            type="search"
                            value={q}
                            onChange={(e) => onQ(e.target.value)}
                            placeholder="Pesquisar por título, número ou tema…"
                            autoComplete="off"
                            aria-label="Pesquisar"
                        />
                    </label>
                    <button type="submit">Pesquisar</button>
                </form>

                <div className="stats">
                    <div className="st">
                        <IconeDocumento size={36}/>
                        <div><b>{doisDigitos(total)}</b><small>documentos catalogados</small></div>
                    </div>
                    <div className="st">
                        <IconeVisto size={36}/>
                        <div><b>{doisDigitos(emVigor)}</b><small>em vigor</small></div>
                    </div>
                    <div className="st">
                        <IconeCalendario size={36}/>
                        <div><small>Actualização</small><span className="dt">{formatarData(actualizado)}</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
