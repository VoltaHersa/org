import { useState } from "react";
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    const placeholderModificado = `${props.placeholder}...`;

    // Destructuracion 
    const { type = "text" }= props

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}


export default CampoTexto