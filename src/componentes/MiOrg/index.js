import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado - hooks funcionalidades que nos ayudan a trabajar con React
    // useState
    // useState() 
    // const [nombreVarianble, funcionActualiza] = useState(valorInicial)
    /*
    const [mostar, acualizarMostrar] = useState(true);
    const manejarClick = () => {
        acualizarMostrar(!mostar)
    }*/

    return <section className="orgSection">
        <h3 className="title"> Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg