import { useState } from "react";
import "../estilos/formulario.css";
const Formulario = (props) => {
   
        // Estado para almacenar el estado del checkbox (marcado/desmarcado)
        const [isChecked, setIsChecked] = useState(false);
      
        // Manejador de eventos para actualizar el estado cuando cambia el estado del checkbox
        const marcarCasilla = () => {
          setIsChecked(!isChecked); // Cambia el estado a su opuesto
        };

    return(
        <form className="formulario">
            <h3>Rellene el formulario</h3>
            <p>Nombre: <input type="text" onChange={props.ChangeInput}  value = {props.nombre}/></p>
            <p>Apellidos: <input type="text" onChange={props.ChangeInput}  value = {props.apellidos}/></p>
            <p>Email: <input type="text" onChange={props.ChangeInput}  value = {props.email}/></p>
            <p>Sexo: <select value={props.sexo} onChange={props.ChangeInput}>
                <option value="opcion1">Hombre</option>
                <option value="opcion2">Mujer</option>       
                <option value="opcion2">Otro</option>                      
            </select></p>
            <p>Mensaje: <textarea value={props.textarea} onChange={props.ChangeInput} /></p>
            <p><input type="checkbox" value={props.isChecked} onChange={marcarCasilla}/> Aceptar teminos y condiciones de uso</p>
            <button onClick={props.ClickButton}>Enviar</button>
        </form>
    )
}

export default Formulario;