import { useState, useEffect } from "react";
import "../estilos/formulario.css";

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