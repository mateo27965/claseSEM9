import Layout from "./componentes/Layout";
import { useState } from "react";  

const Form = () => {
    const [state, setEstate] = useState( {
        email : '',
        message: ''
    })

    function registrarEstado(e) {
        console.log( e.target.name , ' - ' , e.target.value)
        setEstate( {...state,  [e.target.name] : [e.target.value] })
    }

    const doEnviarJSON = async () => {
        // Recuperar los valore sy armar un JSON
        const jsonObject = {}
        jsonObject['email'] = state.email
        jsonObject['message'] = state.message

        const params = JSON.stringify(jsonObject)
        console.log( params)
        // Invocar a la API
  
        try {
            const peticion = await fetch(
                '/api/contactoAPI',
                {
                    method : 'POST',
                    body : params,
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )

            const data = await peticion.json()
            console.log(data)

        } catch (err) {
            console.log(err)
        }
      
        
    }

    const doGuardarJSON = async () => {
        // Recuperar los valore sy armar un JSON
        const jsonObject = {}
        jsonObject['email'] = state.email
        jsonObject['message'] = state.message

        const params = JSON.stringify(jsonObject)
        console.log( params)
        // Invocar a la API
  
        try {
            const peticion = await fetch(
                '/api/contactoAPIFile',
                {
                    method : 'POST',
                    body : params,
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )

            const data = await peticion.json()
            console.log(data)

        } catch (err) {
            console.log(err)
        }     

    }

    function hacernada(e) {
        e.preventDefault()

    }

    // Ahora retornar el formulario
    return (
            <>
                <form onSubmit={hacernada}>
                    <p>
                        Correo: <input name="email" type="email" 
                        placeholder="Ingrese su correo" required 
                        onChange={registrarEstado}
                        ></input>
                    </p>
                    <p>
                        MEnsaje: <textarea name="message" 
                        placeholder="Ingrese su mensaje" required 
                        onChange={registrarEstado}
                        />
                    </p>

                <button onClick={doEnviarJSON}>Enviar JSON</button>
                <button onClick={doGuardarJSON}>Escribir en archivo</button>

                </form>
            </>
    )
    
}

const Contacto = () => {
    return (
        <Layout content={

        <div>
            <h1>Formulario de COntacto</h1>
            <Form />
        </div>
        } ></Layout>
    )
}

export default Contacto

