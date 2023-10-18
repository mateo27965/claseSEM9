/*
Esta API lee el archivo pero retorna una pagina de datos 
La invocacion debe ser:
http://localhost:3000/api/archivos3/leeArchivo?page=xxxxx
*/
import fsPromises from 'fs/promises'
import path from 'path'
import process from 'process'

export default async function leer(req, res) {
    let page = parseInt(req.query.page)
    let pageSize = 5

    // Necesito saber desde donde inicia la pagina y donde termina
    let start = (page - 1 ) * pageSize
    let end = start + pageSize

    let filePath = '/src/json/ejemplo3.json'
    let ruta = path.join( process.cwd() , filePath )

    // lectura
    try {
        let data = await fsPromises.readFile( ruta )
        console.log(data)

        /* Buscar la pagina solicitada */
        const totalItems = JSON.parse(data).length
        // Cuantas pagina hay
        const totalPages = Math.ceil( totalItems / pageSize)
        // obtener la pagina de datos
        let item = JSON.parse(data)
        let itemsAPaginar = item.slice(start, end)
        // Convertir a JSON cadena
        itemsAPaginar = JSON.stringify(itemsAPaginar)

        return res.status(200).json( {
            page,
            totalPages,
            pageSize,
            totalItems,
            items : JSON.parse(itemsAPaginar)
            }
        )

    } catch( error) {
        console.log("Ocurrio un error al leer ")
    }

}