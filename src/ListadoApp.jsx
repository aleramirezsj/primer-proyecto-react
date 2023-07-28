import { useState } from "react"
import { AgregarTarea } from "./components/agregarTarea"

const Item = ({nombre, visto})=>{
    return(
        <li>{nombre} {visto? '✅':'❌'}</li>
    )
}
export const ListadoApp = () => {
    function handleClick(){
        setArreglo([...arreglo,{nombre:'Nuevo Tema',visto:false}])
    }
    const temas=[
        {nombre:"Instalaciones necesarias", visto:true},
        {nombre:"Uso de vite", visto:true},
        {nombre:"Componentes", visto:true},
        {nombre:"Variables en JSX", visto:true},
        {nombre:"Props", visto:true},
        {nombre:"Eventos", visto:true},
        {nombre:"useState", visto:true},
        {nombre:"Redux", visto:false},
        {nombre:"customHooks", visto:false}
     ]
     const [arreglo,setArreglo]=useState(temas)
  return (
    <>
        <h1>Listado de temas del curso</h1>
        <AgregarTarea></AgregarTarea>
        <ul>
            {arreglo.map(item=><Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)}
        </ul>
    </>
  )
}
