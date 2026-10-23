import {Header} from "@/components/Header";
import {Brand} from "@/components/Brand";
import {Footer} from "@/components/Footer";
import {LeiCard} from "@/components/LeiCard";
import {listarPorTipo} from "@/lib/leis";

export default function RegulamentosPage() {
    const regulamentos = listarPorTipo("Regulamento");

    return (
        <>
            <Header />
            <div className="wrap">
                <Brand />
                <section className="hero">
                    <div>
                        <h1>Regulamentos</h1>
                        <p>Normas regulamentares sobre tecnologias digitais em Angola.</p>
                    </div>
                </section>
                <main id="leis">
                    <h2>
                        Regulamentos disponíveis{" "}
                        <small>({regulamentos.length} {regulamentos.length === 1 ? "resultado" : "resultados"})</small>
                    </h2>
                    <div className="grid">
                        {regulamentos.length ? (
                            regulamentos.map((l) => <LeiCard key={l.slug} lei={l} />)
                        ) : (
                            <div className="vazio">Nenhum regulamento encontrado.</div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
