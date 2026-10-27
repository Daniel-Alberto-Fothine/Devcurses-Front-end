import type { ReactNode } from "react";





interface BenefitItemProps{
    title: string;
    description: string;
    icon: ReactNode /**É um tipo que representa os elementos renderizáveis, como icones jsx */

}

function BenefitItem(props:BenefitItemProps){


    const {title,description,icon}= props;

    return(
        <li className="flex gap-4 items-center ">

            {/**Icone de representação da vantagem */}
            <div className="text-primary rounded-lg bg-violet-100 py-2 px-2 ">{icon}</div>

            {/**    Conteúdo testual */}
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold ">{title}</h3>

                <p className="text-sm text-text-secundary">{description}</p>
            </div>

        </li>
    )
}

export default BenefitItem;