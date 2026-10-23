"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export function Header() {
    const pathname = usePathname();

    return (
        <div className="gov">
            <div className="wrap">
                <div className="id">
                    <div className="bandeira"><img src="/bandeira-angola.png" alt="Bandeira de Angola"/></div>
                    <b>REPÚBLICA DE ANGOLA</b>
                    <i/>
                    <span>Portal de Legislação Digital</span>
                </div>
                <nav>
                    <Link className={pathname === "/" ? "on" : ""} href="/">Leis</Link>
                    <Link className={pathname.startsWith("/regulamentos") ? "on" : ""} href="/regulamentos">Regulamentos</Link>
                    <Link className={pathname === "/sobre" ? "on" : ""} href="/sobre">Sobre o projecto</Link>
                </nav>
            </div>
        </div>
    );
}
