import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { Header } from "@/components/Header";
import { Brand } from "@/components/Brand";
import { Footer } from "@/components/Footer";
import { EstadoBadge } from "@/components/EstadoBadge";
import { formatarData } from "@/lib/formatar";
import { obterLei, listarLeisMeta } from "@/lib/leis";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listarLeisMeta().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lei = obterLei(slug);
  if (!lei) return {};
  return {
    title: `${lei.numero} – ${lei.titulo}`,
    description: `${lei.titulo} (${lei.numero}), regulamento em Angola.`,
  };
}

export default async function RegulamentoPage({ params }: Props) {
  const { slug } = await params;
  const lei = obterLei(slug);
  if (!lei) notFound();

  const html = (await remark().use(remarkHtml).process(lei.conteudo)).toString();

  return (
    <>
      <Header />
      <div className="wrap">
        <Brand />
        <article className="documento">
          <Link href="/regulamentos" className="voltar">
            ← Voltar aos regulamentos
          </Link>
          <span className="tag">{lei.tipo}</span>
          <h1>{lei.numero}<br />{lei.titulo}</h1>
          <div className="ficha">
            <EstadoBadge estado={lei.estado} />
            <span>Publicada em {formatarData(lei.data_publicacao)}</span>
            {lei.verificado_em && <span>Verificada em {formatarData(lei.verificado_em)}</span>}
            {lei.fonte_oficial && (
              <a href={lei.fonte_oficial} target="_blank" rel="noreferrer">
                Fonte oficial ↗
              </a>
            )}
          </div>
          <div className="texto" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
      <Footer />
    </>
  );
}