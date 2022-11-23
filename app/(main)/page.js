import FlexContainer from "../flexcontainer";
import Image from 'next/image';
import BtnColor from "../btncolor";
import Btn from "../btn";
import BoxProduct from "../boxproduct";
import BoxDescription from "../boxdescription";
const imageLoader = ({ src }) => {
    return `http://localhost:3000/${src}`;
};
export default function Main({imageLoader}){
    return(
        <main className="overflow-hidden absolute top-0 ">
            <section className="w-screen h-screen relative left-0 top-0 bg-sky-300">
                <div className="absolute w-full h-full left-0 flex justify-center z-10 bg-black/15 backdrop-blur-xs">
                    <div className="flex flex-col items-center max-w-4xl w-full justify-center gap-8 text-center">
                        <h1 className="font-black text-6xl text-white">VOCE ESTA NO LUGAR CERTO PARA APRENDER !</h1>
                        <h2 className="font-medium	text-lg text-white">Desenvolvemos uma plataforma que é capaz de identificar seus pontos fracos e fortes, com isso, traçamos o melhor roteiro de aulas para você. Pois na plataforma CX2-EDUKE acreditamos que o melhor jeito de aprender alguma coisa é praticando e treinando. </h2>
                        <div className="flex gap-12 mt-2">
                            <Btn link="home" text="TUTORIAL"/>
                            <BtnColor link="home" text="COMEÇAR"/>
                        </div>
                        
                    </div>
                </div>
                <Image
                    loader={imageLoader}
                    src={"/slidemain.png"}
                    alt="slide inicial do site"
                    priority={true}
                    placeholder ='blur'
                    blurDataURL={"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                    fill={true}	
                    style={{objectFit: "cover"}}	
                />
            </section>
            <FlexContainer config={"pt-24"}>
                <div className="flex flex-col max-w-3xl w-full">
                    <h1 className="font-black text-5xl">CONHEÇA O NOSSO MÉTODO</h1>
                    <p className="mt-6">Pensando em estudantes de todas as idades, desenvolvemos uma plataforma que é capaz de identificar seus pontos fracos e fortes, com isso, traçamos o melhor roteiro de aulas para você praticar as suas dificuldades e até mesmo aprender coisas novas, para assim, poder passar por todos os seus obstáculos, seja eles provas escolares ou vestibulares. Acreditamos que para evoluir é necessario pratica, treinos, e não somente escutar e escrever, com isso, iremos proporcionar um ensino totalmente personalizado para você.</p>
                    <div className="mt-10">
                        <BtnColor link="home" text="COMEÇAR"/>
                    </div>
                </div>
                    <div>
                        <Image
                            loader={imageLoader}
                            src="/ilhas.png"
                            alt="desenho de ilhas voadoras"
                            width={400}
                            height={400}
                        />
                    </div>
            </FlexContainer>
            <FlexContainer config={"bg-gray-200 py-5 mt-24"}>
                <div>
                    <Image
                        loader={imageLoader}
                        src="/pix.jpeg"
                        alt="codigo pix"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col max-w-3xl w-full">
                    <h1 className="font-black text-5xl">NOS AJUDE A TE AJUDAR =)</h1>
                    <p className="mt-6">Somos uma empresa idependende, entretando, temos muitos gastos para manter esta plataforma no ar e de forma gratuita para muitos. Com isso, pedimos humildemente que nos ajude com qualquer valor, para conseguirmos manter a plataforma no ar com extrema qualidade.</p>
                </div>
            </FlexContainer>
            <FlexContainer config={"mt-24"}>
                <div className="w-full flex-col items-center">
                    <h1 className="font-black text-5xl text-center">NOSSOS PLANOS</h1>
                    <div className="flex justify-between mt-40 w-full flex-wrap">
                        <BoxProduct style="bg-white" title="moedas" text="Aqui você junta Suas moedas e compra alfoss js dhus sudvh" img="pix.jpeg"></BoxProduct>
                        <BoxProduct style="bg-blue-500 -mt-14 text-white" title="moedas" text="Aqui você junta Suas moedas e compra alfoss js dhus sudvh" img="pix.jpeg"></BoxProduct>
                        <BoxProduct style="bg-blue-500 -mt-14 text-white" title="moedas" text="Aqui você junta Suas moedas e compra alfoss js dhus sudvh" img="pix.jpeg"></BoxProduct>
                        <BoxProduct style="bg-white" title="moedas" text="Aqui você junta Suas moedas e compra alfoss js dhus sudvh" img="pix.jpeg"></BoxProduct>
                    </div>
                </div>
            </FlexContainer>
            <FlexContainer config={"mt-40"}>
                <div>
                    <div className="bg-blue-500 flex justify-between gap-16 rounded-l-xl px-10 py-8 text-white">
                        <div className="items-center flex flex-col gap-3">  
                            <h1 className="text-5xl font-bold">1</h1>
                            <h2 className="text-lg font-medium">CADASTRADOS</h2>
                        </div>
                        <div className="items-center flex flex-col gap-3">
                            <h1 className="text-5xl font-bold">1</h1>
                            <h2 className="text-lg font-medium">PLANOS DE ESTUDOS</h2>
                        </div>
                        <div className="items-center flex flex-col gap-3">
                            <h1 className="text-5xl font-bold">1</h1>
                            <h2 className="text-lg font-medium">ARTIGOS</h2>
                        </div>
                        <div className="items-center flex flex-col gap-3">
                            <h1 className="text-5xl font-bold">1</h1>
                            <h2 className="text-lg font-medium">EXERCICIOS</h2>
                        </div>
                    </div>
                </div>
                <div className="max-w-md w-full">
                    <h1 className="text-5xl font-bold">Informações da Nossa Plataforma</h1>
                </div>
            </FlexContainer>
            <FlexContainer config={"mt-40 bg-gray-200 py-10"}>
                <div className="flex flex-col w-1/2 gap-12 mt-16">
                    <BoxDescription img="booknotsmoke.png" text="Na plataforma CX2-EDUKE acreditamos que o melhor jeito de aprender alguma coisa é praticando e treinando. Com isso a nossa Inteligencia Artigicial Conseguira Capturar As Suas maiores Dificudades Para assim Podermos Treina" title="SIMULADOS"/>
                    <BoxDescription img="booknotsmoke.png" text="Na plataforma CX2-EDUKE acreditamos que o melhor jeito de aprender alguma coisa é praticando e treinando. Com isso a nossa Inteligencia Artigicial Conseguira Capturar As Suas maiores Dificudades Para assim Podermos Treina" title="SIMULADOS"/>
                </div>
                <div className="flex flex-col w-1/2 gap-12 -mt-36">
                    <div>
                        <h1 className="font-black text-4xl">VOCE ESTA NO LUGAR CERTO PARA APRENDER !</h1>
                        <h2 className="font-medium text-lg mt-10">Na plataforma CX2-EDUKE acreditamos que o melhor jeito de aprender alguma coisa é praticando e treinando. Com isso, oferecemos alguns serviços que são de extrema importância para complementar os seus estudos.</h2>
                    </div>
                    <BoxDescription img="booknotsmoke.png" text="Na plataforma CX2-EDUKE acreditamos que o melhor jeito de aprender alguma coisa é praticando e treinando. Com isso a nossa Inteligencia Artigicial Conseguira Capturar As Suas maiores Dificudades Para assim Podermos Treina" title="SIMULADOS"/>
                </div>
            </FlexContainer>
            <FlexContainer config={"py-10"}>
                <div className="w-full text-center">
                    <h1 className="text-xl font-bold ">Não se esqueça de compartilhar a sua experiencia com a nossa plataforma =)</h1>
                    <h2>E confira o calendario na aba menu, la ira encontrar datas dos vestibulares e outras Informações importantes</h2>
                    <div className="mt-5">
                        <BtnColor link="home" text="CALENDARIO"/>
                    </div>
                </div>
            </FlexContainer>
        </main>
    )
}