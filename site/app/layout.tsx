import type {Metadata} from "next";
import {Source_Serif_4, Source_Sans_3} from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({subsets: ["latin"], variable: "--font-serif", display: "swap"});
const sans = Source_Sans_3({subsets: ["latin"], variable: "--font-sans", display: "swap"});

export const metadata: Metadata = {
    metadataBase: new URL("https://leis-digitais-angola.vercel.app"),
    title: {
        default: "Leis Digitais de Angola – Legislação Tecnológica",
        template: "%s | Leis Digitais de Angola",
    },
    description:
        "Repositório aberto de leis e regulamentos angolanos sobre tecnologias digitais: protecção de dados pessoais, comunicações electrónicas, cibercriminalidade e áreas conexas. Consulte a legislação digital de Angola de forma simples e pesquisável.",
    keywords: [
        "leis digitais angola",
        "legislação digital angola",
        "lei protecção dados angola",
        "lei 22/11",
        "cibercriminalidade angola",
        "comunicações electrónicas angola",
        "regulamentos digitais angola",
        "leis angolanas tecnologia",
    ],
    authors: [{ name: "Aquiles_Bachira", url: "https://aquiles-bachira.vercel.app" }],
    publisher: "Leis Digitais de Angola",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Leis Digitais de Angola – Legislação Tecnológica",
        description:
            "Repositório aberto de leis e regulamentos angolanos sobre tecnologias digitais. Consulte protecção de dados, comunicações electrónicas e cibercriminalidade.",
        url: "https://leis-digitais-angola.vercel.app",
        siteName: "Leis Digitais de Angola",
        locale: "pt_AO",
        type: "website",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Leis Digitais de Angola",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Leis Digitais de Angola – Legislação Tecnológica",
        description:
            "Repositório aberto de leis e regulamentos angolanos sobre tecnologias digitais.",
        images: ["/logo.png"],
        creator: "@aquiles_bachira",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    // as variáveis das fontes ficam no <html> para o :root as conseguir ler
    return (
        <html lang="pt-AO" className={`${serif.variable} ${sans.variable}`}>
        <body>{children}</body>
        </html>
    );
}
