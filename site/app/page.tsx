import {Header} from "@/components/Header";
import {Brand} from "@/components/Brand";
import {Footer} from "@/components/Footer";
import {Explorador} from "@/components/Explorador";
import {listarLeisMeta} from "@/lib/leis";

export default function Home() {
    const leis = listarLeisMeta();
    const actualizado = new Date().toISOString().slice(0, 10);

    return (
        <>
            <Header/>
            <div className="wrap">
                <Brand/>
                <Explorador leis={leis} actualizado={actualizado}/>
            </div>
            <Footer/>
        </>
    );
}