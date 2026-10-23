import {IconeGithub} from "./Icons";

const REPO = "https://github.com/keybachira/leis-digitais-angola";
const PORTFOLIO = "https://aquiles-bachira.vercel.app";
const REPO_PUBLICO = "https://aquilesbachira-lab.vercel.app";

export function Footer() {
    return (
        <footer>
            <p>
                Este portal disponibiliza os principais diplomas legais em vigor em Angola. Não substitui o Diário da
                República nem aconselhamento jurídico: confirma sempre o texto na fonte oficial.
            </p>
            <div className="l">
                <a href={REPO} target="_blank" rel="noreferrer"><IconeGithub/>Contribuir no GitHub</a>
                <span>·</span>
                <a href={PORTFOLIO} target="_blank" rel="noreferrer">Portfolio: Aquiles_Bachira</a>
                <span>·</span>
                <a href={REPO_PUBLICO} target="_blank" rel="noreferrer">Repositório público</a>
                <span>·</span>
                <span>Feito em Angola</span>
                <span className="mini"/><br/>
                <span style={{fontSize: "11px", opacity: 0.6}}>Desenvolvido por Aquiles_Bachira</span>
            </div>
        </footer>
    );
}
