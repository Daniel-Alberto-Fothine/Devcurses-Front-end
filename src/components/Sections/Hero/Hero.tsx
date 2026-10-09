
import Ilustracao from "../../../assets/images/hero-workspace-p.png"
import { ArrowRight } from "lucide-react";




function Hero(){



    return(
        <section className="py-16 md:py-20">


            <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 items-center">

                    {/**Conteúdo do lado esquerdo */}
                    <div className="flex flex-col gap-6">
                        {/**Slogan */}
                        <p className="text-primary font-medium">APRENDA. CODE. EVOLUA.</p>

                        {/**Tema */}
                        <h1 className="font-bold leading-12 text-4xl md:text-5xl">Aprenda programação e construa <strong className="text-primary">projectos reais.</strong></h1>

                        {/**Discrição */}
                        <p className="font-normal text-text-secundary text-sm">Desenvolva as suas <strong className="text-text-primary">competências </strong>com cursos práticos, aprende ao seu ritmo e transforme ideias em projetos que realmente funciona.</p>

                        <div className="flex gap-2 flex-wrap">

                            {/**Botão Explorar cursos */}
                            <a href="/cursos" className="bg-primary hover:bg-primary-dark rounded-lg flex gap-1 items-center py-4 px-6 font-semibold text-white text-center">Explorar cursos <ArrowRight size={20}/></a>

                            {/**Botão de detalhes */}
                            <a href="/" className="border border-border py-4 px-6 hover:border-primary rounded-lg">Conhecer a plataforma</a>
                        </div>

                    </div>

                    {/**A ilustração será adicionada aqui */}
                    <div className="">
                            
                            <img src={Ilustracao} alt="Ambiente de programação com editor de código." 
                            className=" w-full "/>
                        </div>
                </div>
                
            </div>


        </section>
    )
}

export default Hero;