import Container from "./container";
import Link from "next/link";
import Image from "next/image"
const imageLoader = ({ src }) => {
    return `http://localhost:3000/${src}`;
};
export default async function NavBar({imageLoader}){
    return(
        <header className="relative w-full flex justify-between py-5 items-center z-20">
            <div className="flex gap-44 items-center">
                <Link href="/" className="flex gap-3 items-center">
                    <Image
                        loader={imageLoader}
                        src="/logo.png"
                        alt="LogoCX2"
                        width={35}
                        height={50}
                        priority
                    />
                    <div>
                        <h1 className="text-2xl font-black">EDUKE</h1>
                        <h2 className="text-xl font-semibold -mt-2 tracking-widest">by CX2</h2>
                    </div>
                </Link>
                <nav>
                    <ul className="flex gap-10">
                        <li>
                            <Link href="/plano-de-estudo">Plano de Estudo</Link>
                        </li>
                        <li>
                            <Link href="/plano-de-estudo">Simulado</Link>
                        </li>
                        <li>
                            <Link href="/">Redação</Link>
                        </li>
                        <li>
                            <Link href="/">Tarefas</Link>
                        </li>
                        <li>
                            <Link href="/calendario">Calendario</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}