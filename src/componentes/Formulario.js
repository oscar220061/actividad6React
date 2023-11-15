import { useState, useEffect } from "react";
import "../estilos/formulario.css";
// const Formulario = () => {
   
//         // Estado para almacenar el estado del checkbox (marcado/desmarcado)
//         const [isChecked, setIsChecked] = useState(false);
//         const [nombre, setNombre] = useState("");
//         const [apellido, setApellido] = useState("");
//         const [email, setEmail] = useState("");
//         const [sexo, setSexo] = useState(null);
//         const [mensaje, setMensaje] = useState("");
//         const [errorNombre, setErrorNombre] = useState('');
//         const [errorApellido, setErrorApellido] = useState('');
//         const [errorEmail, setErrorEmail] = useState('');
//         const [errorIsChecked, setErrorIsChecked] = useState('');
//         const [caracteresRestantes, setCaracteresRestantes] = useState(500);

        
//         const [nombreOk, setNombreOk] = useState(false);
//         const [apellidoOk, setApellidoOk] = useState(false);
//         const [emailOk, setEmailOk] = useState(false);
        
        
        
    

//         const handleMensaje = (e) =>{
//             const nuevoMensaje = e.target.value;
//             setMensaje(nuevoMensaje);
//             const caracteresUsados = nuevoMensaje.length;
//             const restantes = 500 - caracteresUsados;
//             setCaracteresRestantes(restantes);
//             if (caracteresUsados >= 500) {
//                 const nuevaCadena = nuevoMensaje.slice(0, 499);
//                 setMensaje(nuevaCadena);
//             }
//         };
        
       
       
//         const handleSubmit = (e) => {
//             if (e) {
//                 e.preventDefault();
          
//             // Validar el nombre
//             setErrorNombre(nombre === '' ? "El nombre no puede estar vacío" : nombre.length > 10 ? "El nombre no puede tener más de 10 caracteres" : '');
//             setNombreOk(nombre !== '' && nombre.length <= 10);
          
//             // Validar el apellido
//             setErrorApellido(apellido === '' ? "El apellido no puede estar vacío" : apellido.length > 20 ? "El apellido no puede tener más de 20 caracteres" : '');
//             setApellidoOk(apellido !== '' && apellido.length <= 20);
          
//             // Validar el email
//             setErrorEmail(email === '' ? "El email no puede estar vacío" : !email.includes("@") ? "El email debe contener el caracter @" : email.length > 20 ? "El email no puede tener más de 20 caracteres" : '');
//             setEmailOk(email !== '' && email.includes("@") && email.length <= 20);
          
//             // Validar el checkbox
//             setErrorIsChecked(!isChecked ? "Debe aceptar los términos y condiciones de uso." : '');
          
//             // Si todas las condiciones son verdaderas, puedes realizar la acción de enviar el formulario
//             if (isChecked && nombreOk && apellidoOk && emailOk) {
//               // Realizar la acción de envío del formulario aquí
//               console.log("Formulario enviado con éxito");
//             }
//             }
//           };
          
//           useEffect(() => {
//             // Llamada a la función de validación cuando cambia isChecked
//             handleSubmit();
//           }, [isChecked]);
          
//           useEffect(() => {
//             // Llamada a la función de validación cuando cambia nombreOk
//             handleSubmit();
//           }, [nombreOk]);
          
//           useEffect(() => {
//             // Llamada a la función de validación cuando cambia apellidoOk
//             handleSubmit();
//           }, [apellidoOk]);
          
//           useEffect(() => {
//             // Llamada a la función de validación cuando cambia emailOk
//             handleSubmit();
//           }, [emailOk]);
              
        
//         // Manejador de eventos para actualizar el estado cuando cambia el estado del checkbox
//         const marcarCasilla = () => {
//           setIsChecked(!isChecked); // Cambia el estado a su opuesto
//         };
       
          
//           //{condicion1 ? (<p>La condición 1 es verdadera</p>) : condicion2 ? ( <p>La condición 2 es verdadera</p>) : ( <p>Ambas condiciones son falsas</p>)}
       
  
//     return(
//         <form onSubmit={handleSubmit} className="formulario">
//             <h3>Rellene el formulario</h3>
//             <p>Nombre: <input type="text" onChange={(e) => setNombre(e.target.value)}  value = {nombre}/></p>
//             <p >{errorNombre && <p style={{ color: 'red' }}>{errorNombre}</p>}</p>
//             <p>Apellidos: <input type="text" onChange={(e) => setApellido(e.target.value)}  value = {apellido}/></p>
//             <p>{errorApellido && <p style={{ color: 'red' }}>{errorApellido}</p>}</p>
//             <p>Email: <input type="text" onChange={(e) => setEmail(e.target.value)}  value = {email}/></p>
//             <p>{errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}</p>
//             <p>Sexo: <select value={sexo || ""} onChange={(e) => setSexo(e.target.value)}>
//                 <option value="hombre">Hombre</option>
//                 <option value="mujer">Mujer</option>                            
//             </select></p>

//             <p>Mensaje: <textarea value={mensaje} onChange={handleMensaje} /></p>
//             <p>Te quedan {caracteresRestantes} carácteres</p>           
//             <p><input type="checkbox" value={isChecked} onChange={marcarCasilla}/> Aceptar teminos y condiciones de uso</p>
//             <p>{errorIsChecked && <p style={{ color: 'red' }}>{errorIsChecked}</p>}</p>
//             <button type="submit" >Enviar</button>
//         </form>

//     )
// }




const Formulario = () => {
    const [terminos, setTerminos] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [sexo, setSexo] = useState(null);
    const [errores, setErrores] = useState({ nombre: "", apellido: "", email: "", terminos: "" });
    const [formValido, setFormValido] = useState(false);
    
    const [caracteresRestantes, setCaracteresRestantes] = useState(500);
    const [mensaje, setMensaje] = useState("")
    const handleMensaje = (e) =>{
        const nuevoMensaje = e.target.value;
        setMensaje(nuevoMensaje);
            const caracteresUsados = nuevoMensaje.length;
            const restantes = 500 - caracteresUsados;
            setCaracteresRestantes(restantes);
        if (caracteresUsados >= 500) {
                const nuevaCadena = nuevoMensaje.slice(0, 499);
                setMensaje(nuevaCadena);
            }
        };


  const validarFormulario = () => {
    let errores = {};
    let formValido = true;
   
    // Validación del nombre
    if (nombre === "") {
      formValido = false;
      errores.nombre = "El nombre no puede estar vacío.";
    }else if(nombre.length > 10){
        formValido = false;
        errores.nombre = "El nombre no puede superar los 10 carácteres";
    }
    // Validación del apelidos
    if (apellido === "") {
        formValido = false;
        errores.apellido = "El apellido no puede estar vacío.";
      }else if(nombre.length > 10){
          formValido = false;
          errores.apellido = "El apellido no puede superar los 10 carácteres";
      }

    // Validación del email
    if (email === "") {
      formValido = false;
      errores.email = "El email no puede estar vacío.";
    }else if(email.length > 20){
        formValido = false;
        errores.email = "El email no puede superar los 20 carácteres.";
    }else if(!email.includes("@")){
        formValido = false;
        errores.email = "El email debe contener el caracter @.";
    }

    //Validacion de los terminos
    if(terminos === false){
        formValido = false;
        errores.terminos = "Debe aceptar los términos y condiciones de uso.";
    }

    setErrores(errores);
    setFormValido(formValido);
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    validarFormulario();
  };

  useEffect(() => {
   
    if (formValido) {
        
        setNombre("")
        setApellido("")
        setEmail("")
        setSexo("hombre")
        setTerminos(false)
        setMensaje("")
        return alert('Datos enviados correctamente');
      
      
    }
    
  }, [formValido]);

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div>
      <h3>Rellene el formulario</h3>
        <p>Nombre: <input type="text" onChange={(e) => setNombre(e.target.value)}  value = {nombre}/></p>
        <p >{errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}</p>
        <p>Apellidos: <input type="text" onChange={(e) => setApellido(e.target.value)}  value = {apellido}/></p>
        <p>{errores.apellido && <p style={{ color: 'red' }}>{errores.apellido}</p>}</p>
        <p>Email: <input type="text" onChange={(e) => setEmail(e.target.value)}  value = {email}/></p>
        <p>{errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}</p>
        <p>Sexo: <select value={sexo || ""} onChange={(e) => setSexo(e.target.value)}>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>                            
        </select></p>

        <p>Mensaje: <textarea value={mensaje} onChange={handleMensaje} /></p>
        <p>Te quedan {caracteresRestantes} carácteres</p>           
            <p><input type="checkbox" value={terminos} onChange={() => setTerminos(!terminos)} checked={terminos}/> Aceptar teminos y condiciones de uso</p>
        <p>{errores.terminos && <p style={{ color: 'red' }}>{errores.terminos}</p>}</p>
            
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;