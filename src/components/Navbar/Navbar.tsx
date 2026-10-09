

import { useState } from "react"
import { Menu, X } from "lucide-react"

import logo from "../../assets/images/logo-white.png"
import Button from "../Button/Button"
import Input from "../Input/Input"

import "./navbar.css"



export default function Navbar(){



        {/**Botão Menu para mobile. */}
    const [menuOpen, setMenuOpen]= useState<boolean>(false);
    return(
        <nav className='sticky border-b bg-surface border-border'>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
                
                <a href="">
                    <img src={logo} alt="DevCurses" className="w-40 h-auto"/>
                </a>
 
                {/**LInkes */}
                <div className="flex gap-6 ">
                    <a href="/" className="text-base font-medium text-text-secundary hover:text-primary hidden md:flex">Início</a>
                    <a href="/cursos" className="text-base font-medium text-text-secundary hover:text-primary hidden md:flex">Cursos</a>
                    <a href="/livros" className="text-base font-medium text-text-secundary hover:text-primary hidden md:flex">Livros</a>
                </div>


                {/**acções */}
                <div className="flex items-center gap-4">
                    
                    <a href="/login" className="border bg-transparent border-border py-2 px-4 hidden md:flex rounded-lg text-text-primary hover:text-text-primary hover:border-primary">Entrar</a>

                    <a href="/cadastro" className="bg-primary rounded-lg font-semibold hidden md:flex text-white hover:bg-primary-dark py-3 px-4">Criar conta</a>


                {/**Botão Menu para mobile. */}
                    <button type="button" onClick={()=> setMenuOpen(!menuOpen)} className="hover:text-text-primary md:hidden text-primary">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    
                </div>

                

            </div>
                {menuOpen &&(
                        <div className="flex flex-col gap-6 bg-surface py-4 px-6">

                            
                                <a href="/" className="text-base font-medium text-text-secundary hover:text-primary">Início</a>
                                <a href="/cursos" className="text-base font-medium text-text-secundary hover:text-primary">Cursos</a>
                                <a href="/livros" className="text-base font-medium text-text-secundary hover:text-primary">Livros</a>
                           



                            <a href="/login" className="border bg-transparent border-border py-2 px-4 rounded-lg text-text-primary hover:text-text-primary hover:border-primary">Entrar</a>
                            <a href="/cadastro" className="bg-primary rounded-lg font-semibold text-white hover:bg-primary-dark py-3 px-4">Criar conta</a>


                        
                        </div>
                    )}
        </nav>
    )
}