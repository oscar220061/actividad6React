import { useCallback, useState } from "react";
import "../estilos/formulario.css";
const Formulario = () => {
   
        // Estado para almacenar el estado del checkbox (marcado/desmarcado)
        const [isChecked, setIsChecked] = useState(false);
        const [nombre, setNombre] = useState("");
        const [apellido, setApellido] = useState("");
        const [email, setEmail] = useState("");
        const [sexo, setSexo] = useState(null);
        const [mensaje, setMensaje] = useState("");
        const [error, setError] = useState('');
        const [error1, setError1] = useState('');
        // Manejador de eventos para actualizar el estado cuando cambia el estado del checkbox
        const marcarCasilla = () => {
          setIsChecked(!isChecked); // Cambia el estado a su opuesto
        };
        const handleSubmit = useCallback((e) => {
            e.preventDefault();

            if(nombre === ""){
                setError("El nombre no puede permanecer vacío")
            }else if(nombre.length > 10){
                setError("El nombre no puede tener más de 10 carácteres")
            }else{
                setError("")
            }
            if(apellido === ""){
                setError1("El apellido no puede permanecer vacío")
            }else if(apellido.length > 20){
                setError1("El apellido no puede tener más de 20 carácteres")
            }else{
                setError1("")
            }


          });

    return(
        <form onSubmit={handleSubmit} className="formulario">
            <h3>Rellene el formulario</h3>
            <p>Nombre: <input type="text" onChange={(e) => setNombre(e.target.value)}  value = {nombre}/></p>
            <p>{error && <p style={{ color: 'red' }}>{error}</p>}</p>
            <p>Apellidos: <input type="text" onChange={(e) => setApellido(e.target.value)}  value = {apellido}/></p>
            <p>{error1 && <p style={{ color: 'red' }}>{error1}</p>}</p>
            <p>Email: <input type="text" onChange={(e) => setEmail(e.target.value)}  value = {email}/></p>
            <p>Sexo: <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="opcion1">Hombre</option>
                <option value="opcion2">Mujer</option>                            
            </select></p>
            <p>Mensaje: <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} /></p>
            <p><input type="checkbox" value={isChecked} onChange={marcarCasilla}/> Aceptar teminos y condiciones de uso</p>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Formulario;