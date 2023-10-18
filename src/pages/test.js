import Layout from './componentes/Layout'

export default function test() {

    var data

    async function leer() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( 'api/archivos1/leeArchivo', opciones)
        data = await request.json()
        console.log( data)
        return data

    }

    async function escribir() {
        let data = await leer()
        // Buscar el mayor ID
        let mayor = 0
        data.forEach(element => {
            let id = parseInt( element["id"] )
            if ( id > mayor ) {
                mayor = id
            }
        });
        // sumar 1
        mayor = mayor + 1
        
        // Generar nuevo objeto JSON
        let obj = { "id" : mayor , "name": "Pepito", "username" : "PP", "email" : "pp@ulima.edu.pe"}

        // Agregar al arreglo JSON
        data.push( obj)

        console.log( JSON.stringify(data))
        // Llamar a escribir
        const opciones = {
            method : 'POST',
            body : JSON.stringify( data ),
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( 'api/archivos1/escribeArchivo', opciones)
        data = await request.json()
        console.log( data)


    }



    return (
        <Layout content={
            <>
                <h1>Ejemplo de Lectura/Escritura de archivos con APIs</h1>
                <button onClick={leer}>Leer</button>
                <button onClick={escribir}>Escribir</button>
            
            </>
        }
        ></Layout>
    )
}