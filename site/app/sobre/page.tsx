import {Header} from "@/components/Header";
import {Brand} from "@/components/Brand";
import {Footer} from "@/components/Footer";
import {listarLeisMeta} from "@/lib/leis";

export default function SobrePage() {
    const leis = listarLeisMeta();
    const leisVigor = leis.filter((l) => l.estado === "em vigor");
    const totalLeis = leis.filter((l) => l.tipo === "Lei").length;
    const totalRegulamentos = leis.filter((l) => l.tipo === "Regulamento").length;

    return (
        <>
            <Header />
            <div className="wrap">
                <Brand />
                <section className="hero">
                    <div>
                        <h1>Sobre o projecto</h1>
                        <p>
                            O &quot;Leis Digitais de Angola&quot; é um repositório aberto e independente que cataloga a
                            legislação angolana relativa a tecnologias digitais: protecção de dados pessoais,
                            comunicações electrónicas, cibercriminalidade e áreas conexas.
                        </p>
                    </div>
                </section>

                <section style={{marginTop: "48px"}}>
                    <h2>Estatísticas</h2>
                    <div className="stats">
                        <div className="st">
                            <div><b>{leis.length}</b><small>documentos catalogados</small></div>
                        </div>
                        <div className="st">
                            <div><b>{leisVigor.length}</b><small>em vigor</small></div>
                        </div>
                        <div className="st">
                            <div><b>{totalLeis}</b><small>leis</small></div>
                        </div>
                        <div className="st">
                            <div><b>{totalRegulamentos}</b><small>regulamentos</small></div>
                        </div>
                    </div>
                </section>

                <section style={{marginTop: "48px"}}>
                    <h2>Como funciona</h2>
                    <p>
                        Os documentos são extraídos de ficheiros Markdown com frontmatter YAML, organizados nas
                        pastas <code>leis/</code> e <code>regulamentos/</code> do repositório. O site é gerado
                        estaticamente com Next.js e pode ser hospedado em qualquer serviço de alojamento estático.
                    </p>
                    <h3 style={{marginTop: "24px"}}>Estado dos documentos</h3>
                    <ul>
                        <li><strong>Em vigor:</strong> diploma actualmente aplicável.</li>
                        <li><strong>Alterada:</strong> diploma que sofreu alterações posteriores.</li>
                        <li><strong>Revogada:</strong> diploma que deixou de produzir efeitos.</li>
                    </ul>
                </section>

                <section style={{marginTop: "48px"}}>
                    <h2>Colaborar</h2>
                    <p>
                        Este é um projecto de código aberto. Pode sugerir correções, adicionar novos diplomas ou
                        reportar imprecisões abrindo uma <a href="https://github.com/keybachira/leis-digitais-angola/issues">issue no GitHub</a>
                        ou enviando um pull request.
                    </p>
                    <p style={{marginTop: "16px"}}>
                        <strong>Importante:</strong> este portal não substitui o Diário da República nem serve de
                        aconselhamento jurídico. Confirme sempre o texto na fonte oficial.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}
