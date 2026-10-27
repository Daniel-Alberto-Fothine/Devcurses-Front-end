
import Navbar from "../../components/Navbar/Navbar"
import FeaturedCourses from "../../components/Sections/FeaturedCourses/FeaturedCourses"
import Hero from "../../components/Sections/Hero/Hero"
import WyDevCurses from "../../components/Sections/WyDevCurses/WyDevCurses"

/**npm install -D typescript @types/node */


export default function Home(){
    return(
        <>
        
        
        <div className="min-h-screen flex flex-col bg-bg mx-auto">
            <Navbar/>
            <Hero />
                <WyDevCurses />
                <FeaturedCourses/>

        </div>
        </>
    )
}