import Link from "next/link";

type Ativo = "leis" | "regulamentos" | "sobre";

export function Header({ ativo }: { ativo?: Ativo }) {
  const on = (k: Ativo) => (ativo === k ? "on" : undefined);
  return (
    <div className="gov">
      <div className="wrap">
        <div className="id">
          <div className="flag" />
          <b>REPÚBLICA DE ANGOLA</b>
          <i />
          <span>Portal de Legislação Digital</span>
        </div>
        <nav>
          <Link className={on("leis")} href="/">Leis</Link>
          <Link className={on("regulamentos")} href="/regulamentos">Regulamentos</Link>
          <Link className={on("sobre")} href="/sobre">Sobre o projecto</Link>
        </nav>
      </div>
    </div>
  );
}
