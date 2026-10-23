import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Brand } from "@/components/Brand";
import { Footer } from "@/components/Footer";
import { EstadoBadge } from "@/components/EstadoBadge";
import { REPO } from "@/lib/projecto";
import "./sobre.css";

export const metadata: Metadata = {
  title: "Sobre o projecto",
  description: "Projecto aberto e independente que reúne a legislação angolana sobre tecnologias digitais.",
};

const EXEMPLO = `---
tipo: Lei
titulo: "Lei de Protecção de Dados Pessoais"
numero: "Lei n.º 22/11"
data_publicacao: "2011-06-17"
estado: em vigor
tema: [protecção de dados, privacidade]
fonte_oficial: "https://..."
verificado_em: "2026-10-23"
---

### Artigo 1.º
(texto oficial, copiado do Diário da República)`;

export default function Sobre() {
  return (
    <>
      <Header ativo="sobre" />
      <div className="wrap">
        <Brand />
        <article className="sobre">
          <h1>Sobre o projecto</h1>
          <p className="lead">
            Leis Digitais de Angola é um projecto aberto que reúne, num único lugar, a legislação angolana sobre
            tecnologia, dados pessoais, comunicações electrónicas e segurança digital.
          </p>

          <div className="aviso">
            <p>
              <strong>Projecto independente.</strong> Este portal não é um site oficial do Estado angolano, não tem
              ligação a nenhuma entidade pública e não substitui o Diário da República nem aconselhamento jurídico.
              Confirma sempre o texto na fonte oficial.
            </p>
          </div>

          <h2>Porquê este projecto</h2>
          <div className="tres">
            <div><h3>Acessível</h3><p>Um só sítio, com pesquisa por título, número e tema, em vez de PDFs espalhados.</p></div>
            <div><h3>Aberto</h3><p>Todo o conteúdo vive num repositório público. Qualquer pessoa pode consultar e contribuir.</p></div>
            <div><h3>Verificável</h3><p>Cada documento indica a fonte oficial e a data em que foi verificado.</p></div>
          </div>

          <h2>Como funciona</h2>
          <p>
            Cada lei ou regulamento é um ficheiro Markdown no repositório, com um cabeçalho de metadados (número, data,
            estado, temas e fonte). O site é gerado automaticamente a partir desses ficheiros, por isso o que está no
            repositório é exactamente o que aparece aqui.
          </p>

          <h2>Estados dos documentos</h2>
          <ul className="estados">
            <li><EstadoBadge estado="em vigor" /> Diploma actualmente aplicável.</li>
            <li><EstadoBadge estado="alterada" /> Foi modificado por diploma posterior: consulta a versão consolidada.</li>
            <li><EstadoBadge estado="revogada" /> Já não está em vigor. Mantém-se aqui apenas como referência histórica.</li>
          </ul>

          <h2>Como contribuir</h2>
          <ol className="passos">
            <li>Faz <em>fork</em> do repositório no GitHub.</li>
            <li>Cria um ficheiro <code>.md</code> na pasta <code>leis/</code> ou <code>regulamentos/</code>, com o cabeçalho abaixo.</li>
            <li>Copia o texto da fonte oficial e indica sempre o link e a data de verificação.</li>
            <li>Abre um <em>pull request</em>. Se encontrares um erro, abre antes uma <em>issue</em>.</li>
          </ol>
          <pre><code>{EXEMPLO}</code></pre>

          <div className="botoes">
            <a className="btn" href={REPO} target="_blank" rel="noreferrer">Ver no GitHub</a>
            <Link className="btn sec" href="/">Voltar às leis</Link>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
