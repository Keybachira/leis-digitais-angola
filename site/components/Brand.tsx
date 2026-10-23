import Link from "next/link";

export function Brand() {
    return (
        <Link href="/" className="brand">
            <img src="/icone.png" alt="logo" />
            <b>Leis Digitais<br/>de Angola</b>
        </Link>
    );
}
