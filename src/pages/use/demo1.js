/* ejemplo de uso de useEffect */
import { useEffect, useState  } from 'react'
import Layout from '../componentes/Layout'

const MiComponente = () => {
    const [datos, setDatos] = useState( [] )
    const [flagCambio, setFlagCambio] = useState( 0 )

    /* Esta funcion es de la clase anterior del dia MArtes */
    async function leer() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( '/api/archivos1/leeArchivo', opciones)
        let data = await request.json()
        console.log( data)
    
        /* MAnejar el estado */
        setDatos(data)
        setFlagCambio( 0 )

    }


    /* Usar efectos*/
    useEffect( () => {
        leer()
    } , [flagCambio]  )

    /* Esta es la parte que se renderiza*/
    return(
        <Layout content={
            <>
                <h1>Ejemplo de useEffect</h1>
                <ul>
                    {
                        datos.map(  dato => (
                            <li key={dato.id}>
                                {dato.id} - {dato.name} - {dato.email}
                            </li>
                        ))
                    }
                </ul>         
                <button onClick={leer}>LEER</button>   
                <button onClick={retroceder} disable={ page===1 } >Anterior</button>
                <button onClick={avanzar} disable={page === totalPages}>Siguiente</button>
                <p>Pagina {page} de {totalPages}</p>
            </>
        }
        ></Layout>
    )
}

export default MiComponente