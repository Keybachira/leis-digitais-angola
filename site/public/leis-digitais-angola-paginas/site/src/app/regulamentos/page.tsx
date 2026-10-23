import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Brand } from "@/components/Brand";
import { Footer } from "@/components/Footer";
import { Explorador } from "@/components/Explorador";
import { dataHoje, listarRegulamentos, resumos } from "@/lib/leis";

export const metadata: Metadata = {
  title: "Regulamentos",
  description: "Decretos e regulamentos que desenvolvem as leis angolanas sobre tecnologia, dados e comunicações.",
};

export default function Regulamentos() {
  return (
    <>
      <Header ativo="regulamentos" />
      <div className="wrap">
        <Brand />
        <Explorador
          leis={resumos(listarRegulamentos())}
          actualizado={dataHoje()}
          titulo="Regulamentos digitais de Angola"
          descricao="Decretos, regulamentos e outras normas que desenvolvem as leis sobre tecnologia, dados e comunicações."
          vazio="Ainda não há regulamentos catalogados. Contribui adicionando um ficheiro à pasta regulamentos/ do repositório."
        />
      </div>
      <Footer />
    </>
  );
}
