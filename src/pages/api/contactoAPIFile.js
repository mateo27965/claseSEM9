
import fsPromises from 'fs/promises'

export default async function contactoAPIFile(req, res) {

    if ( req.method !== 'POST') {
        res.status(405).send( { "error" : "metodo no sportado ..solo POST"})
    } else if ( req.method === 'POST') {
        console.log( req.body)

        const tmp = JSON.stringify(req.body).replace("'",'"')
        const body = JSON.parse(tmp)

        // escribir en un archivo
        await fsPromises.writeFile(
            './ejemplo.json',
            JSON.stringify(body)
        )
        console.log(body)

        res.status(200).json(
            {
                "a" :"OK",
                "b" : "ya" ,
                "c" : "grabe",
                "d": `${body.email}`,
                "e": `${body.message}`
             }
        )
    }

}