import { Heart } from "lucide-react";
import type Course from "../../types/course/course";
import { useState } from "react";



interface CourseProps{
    course: Course;
}

function CourseCard(props:CourseProps){

  
    const {id,imageUrl,title,
        category,description,
        level,durationHours,
        price,currency,isFree
    }= props.course;

    const [isFavorite, setIsFavorite]= useState<boolean>(false);
    return(
        <div className="flex flex-col bg-white border border-border rounded-xl gap-4 shadow hover:shadow-lg hover:-translate-y-1 transition-transform duration-700">
            
            <div className="relative flex">
                <img src={imageUrl} alt={title} className="w-full aspect-video object-cover rounded-t-2xl" />
            
            {/**Botão favoritar */}
            <button type="button" aria-label="alternate favorite" className="absolute z-0 cursor-pointer top-0 right-0 mt-4 mr-5 flex items-center justify-center size-10 bg-white shadow-sm rounded-full hover:bg-violet-100 transition-colors"
            onClick={()=> setIsFavorite(!isFavorite)}
            >
               { isFavorite ? <Heart size={22} className="fill-red-500 text-red-500"/> : <Heart size={22}/>}
            </button>
            </div>
            
            <div className="p-6 flex flex-col h-full">


                <div className="flex flex-col mb-4 gap-2">
                    {/**Categoria */}
                    <span className="text-[14px] bg-violet-100 w-fit py-1 px-2 rounded-md text-violet-800 font-medium">{category}</span>

                    <h3 className="text-[20px] font-semibold text-text-primary">{title}</h3>

                    <p className="text-slate-600 text-[16px] ">{description}</p>
                </div>


                <div className="flex gap-2 items-center text-slate-500 text-[14px] mb-4 font-normal">
                    <span className="">{level}</span>
                    <span className="bg-gray-600 rounded-full size-1"></span>

                    <span>Duração:{durationHours}h</span>
                </div>


                <div className="flex justify-between items-center mt-auto">

                    <span className="text-[20px] font-semibold">
                       {isFree ? "Grátis" :` ${price} ${currency}`}
                    </span>

                    <button className="bg-primary hover:bg-primary-dark py-3 cursor-pointer px-6 rounded-lg text-white font-semibold">
                        {isFree ? "Começar curso" : "Comprar"}
                    </button>
                </div>


            </div>
            
            
        </div>
    )
}

export default  CourseCard;