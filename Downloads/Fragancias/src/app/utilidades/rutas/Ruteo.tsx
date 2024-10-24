import {Route, Routes} from "react-router-dom"

import { MenuAdmin } from "../../componentes/menu/MenúAdmin"
import { Inicio } from "../../componentes/contenedor/inicio"
import { MenuCrear } from "../../componentes/menu/MenúCrear"
import { MenuListar } from "../../componentes/menu/Menú Listar"
import { MenuActualizar } from "../../componentes/menu/MenúActualizar"
import { Acerca } from "../../componentes/otros/Acerca"
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado"

export const Ruteo = ()=>{
    return(
        <Routes>

           
           
            <Route path="/" element={<Inicio/>}/>
            <Route path="/mencre" element={<MenuCrear/>}/>
            <Route path="/menlis" element={<MenuListar/>}/>
            <Route path="/menadmin" element={<MenuAdmin/>}/>
            <Route path="/menactu/:codigo" element={<MenuActualizar/>}/>

            <Route path="/menuacer" element={<Acerca/>}/>
            
            <Route path="*" element={<NoEncontrado/>}/>
        </Routes>
    )
}