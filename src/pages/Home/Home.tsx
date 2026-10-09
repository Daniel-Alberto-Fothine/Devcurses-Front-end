
import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Sections/Hero/Hero"

/**npm install -D typescript @types/node */


export default function Home(){
    return(
        <>
        
        
        <div className="min-h-screen flex flex-col bg-bg mx-auto">
            <Navbar/>
            <Hero />
        </div>
        </>
    )
}