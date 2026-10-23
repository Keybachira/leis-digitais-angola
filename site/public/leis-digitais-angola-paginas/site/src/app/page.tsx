import { Header } from "@/components/Header";
import { Brand } from "@/components/Brand";
import { Footer } from "@/components/Footer";
import { Explorador } from "@/components/Explorador";
import { dataHoje, listarSoLeis, resumos } from "@/lib/leis";

export default function Home() {
  return (
    <>
      <Header ativo="leis" />
      <div className="wrap">
        <Brand />
        <Explorador
          leis={resumos(listarSoLeis())}
          actualizado={dataHoje()}
          titulo="Legislação digital de Angola"
          descricao="Consulte legislação sobre tecnologia, dados, comunicações e segurança digital num único lugar."
          vazio="Ainda não há leis catalogadas. Adiciona um ficheiro à pasta leis/ do repositório."
        />
      </div>
      <Footer />
    </>
  );
}
