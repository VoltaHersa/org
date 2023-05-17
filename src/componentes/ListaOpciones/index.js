import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Metodo map -> arreglo.map((equipo, index) => {
    //  return <option></option>
    //})
    /*const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestión"
    ]*/
    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccioinar Equipo</option>
            {props.equipos.map( (equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
                }
            )}
        </select>
    </div>
}

export default ListaOpciones