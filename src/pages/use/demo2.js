/* ejemplo de uso de useEffect */
import { useEffect, useState  } from 'react'
import Layout from '../componentes/Layout'

const MiComponente = () => {
    const [datos, setDatos] = useState( [] )
    const [page, setPage] = useState( 1 )
    const [totalPages, setTotalPages] = useState( 1 )

    /* Esta funcion es de la clase anterior del dia MArtes */
    async function leer() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( `/api/archivos3/leerArchivo?page=${page}`, opciones)
        let data = await request.json()
        console.log( data)
    
        /* MAnejar el estado */
        setDatos(data.items)
        setTotalPages(data.totalPages)

    }

    function retroceder() {
        if ( page > 1) {
            setPage( page - 1 )
        }

    }
    function avanzar() {
        if ( page < totalPages) {
            setPage(page + 1)
        }
    }

    /* Usar efectos*/
    useEffect( () => {
        leer()
    } , [page]  )

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
                <button onClick={retroceder} disabled ={ page===1 } >Anterior</button>
                <button onClick={avanzar} disabled={page === totalPages}>Siguiente</button>
                <p>Pagina {page} de {totalPages}</p>
            </>
        }
        ></Layout>
    )
}

export default MiComponente