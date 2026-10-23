import Link from "next/link";
import type {LeiMeta} from "@/lib/tipos";
import {formatarData} from "@/lib/formatar";
import {EstadoBadge} from "./EstadoBadge";
import {IconeCalendario, IconeSeta} from "./Icons";

export function LeiCard({lei}: { lei: LeiMeta }) {
    return (
        <Link className="card" href={`/leis/${lei.slug}`}>
            <span className="tag">{lei.tipo}</span>
            <h3>
                {lei.numero}
                <br/>
                {lei.titulo}
            </h3>
            <EstadoBadge estado={lei.estado}/>
            <div className="meta">
                <IconeCalendario size={18}/>
                <span>{formatarData(lei.data_publicacao)}</span>
                <i>|</i>
                <span>{lei.numero}</span>
            </div>
            <div className="ver">
                Consultar documento <IconeSeta size={16}/>
            </div>
        </Link>
    );
}
