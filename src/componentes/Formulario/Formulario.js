import { useState } from "react"
import "./Formulario.css"
import ListaOpciones from "../ListaOpciones"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import Boton from "../Boton"

const Formulario = (props) => {
    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState("");
    
    const [titulo,actualizarTitulo] =useState("");
    const [color,actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresa nombre" 
                required 
                valor={nombre} 
                setValor={setNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresa puesto" 
                required 
                valor={puesto} 
                setValor={setPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresa enlace de foto" 
                required 
                valor={foto} 
                setValor={setFoto}
            />
            <ListaOpciones 
                valor={equipo}
                setValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresa titulo" 
                required 
                valor={titulo} 
                setValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="Ingresa color en Hexadecimal" 
                required 
                valor={color} 
                setValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
} 

export default Formulario