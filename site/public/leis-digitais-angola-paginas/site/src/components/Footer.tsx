import { IconeGithub } from "./Icons";
import { REPO } from "@/lib/projecto";


export function Footer() {
  return (
    <footer>
      <p>
        Este portal disponibiliza os principais diplomas legais em vigor em Angola. Não substitui o Diário da
        República nem aconselhamento jurídico: confirma sempre o texto na fonte oficial.
      </p>
      <div className="l">
        <a href={REPO} target="_blank" rel="noreferrer"><IconeGithub />Contribuir no GitHub</a>
        <span>·</span>
        <span>Feito em Angola</span>
        <span className="mini" />
      </div>
    </footer>
  );
}
