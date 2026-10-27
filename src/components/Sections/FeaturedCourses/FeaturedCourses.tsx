import { courses } from "../../../data/courses";
import CourseCard from "../../CourseCard/CourseCard";


function FeaturedCourses(){

    const featuredCourses= courses.filter(({isFeatured})=> isFeatured)
    return(
        <section className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="mb-6 text-3xl md:text-4xl font-semibold">Cursos em destaque</h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {featuredCourses.map((course)=>(
                    <CourseCard course={course} key={course.id}/>
                ))}
            </div>
            
        </section>
    )
}


export default FeaturedCourses;