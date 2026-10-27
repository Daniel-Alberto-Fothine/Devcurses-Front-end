
import { BookOpen, Code, GraduationCap } from "lucide-react";
import BenefitItem from "./BenefitItem";
import ex from "../../../assets/images/etapasDevCurses.png"


function WyDevCurses(){

    const livro= <BookOpen size={24}/>;
    const code= <Code size={24}/>;
    const graduacao= <GraduationCap size={24}/>;

    return(
        <section className=" pb-16 md:pb-20">

                {/**Contentor geral */}
            <div className="flex flex-col gap-4 md:gap-12 mx-auto max-w-7xl  px-6 md:px-8">

               {/**Layout principal */}
               <div className=" flex flex-col gap-6">
                   
                   {/**Banner geral(conteúdo textual*/}
                   <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] justify-items-center gap-4 md:gap-6 ">

                       <div className=" flex flex-col gap-4">

                           <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Porquê Dev<strong className="text-primary">Curses?</strong></h2>

                           <h3 className="text-2xl md:text-3xl font-semibold mb-3">Do primeiro código aos teus projetos reais.</h3>

                            <p className="text-text-secundary text-base">Encontre cursos e livros para desenvolver as tuas competências com recursos práticos que te ajudam a aprender programação e a transformar conhecimento em projetos reais.</p>                       
                       </div>

                           <img src={ex} alt="" />
                   </div>
                   {/**Lista de vantagens */}
                   <ul className="grid  grid-cols-1 md:grid-cols-2 gap-6">
                    
                       <BenefitItem
                       title={"Aprendizagem prática"}
                       description={"Desenvolver competências aplicando o conhecimento em projetos."}
                       icon={code}
                       />

                       <BenefitItem
                       title={"Estuda ao teu ritmo"}
                       description={"Aprender de acordo com a própria disponibilidade."}
                       icon={graduacao}
                       />
                       <BenefitItem
                       title={"Cursos e livros"}
                       description={"Encontrar diferentes recursos de aprendizagem na mesma plataforma."}
                       icon={livro}
                       />


                   </ul>
               </div>

            </div>
        </section>
    )
}

export default WyDevCurses;