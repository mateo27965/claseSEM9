export default async function contactoAPI(req, res) {

    if ( req.method !== 'POST') {
        res.status(405).send( { "error" : "metodo no sportado ..solo POST"})
    } else if ( req.method === 'POST') {
        console.log( req.body)

        const tmp = JSON.stringify(req.body).replace("'",'"')
        const body = JSON.parse(tmp)
  
        console.log(body)

        res.status(200).json(
            {
                "a" :"Hola",
                "b" : "Mundo",
                "c" : "por que llegas tarde",
                "d": `${body.email}`,
                "e": `${body.message}`
             }
        )
    }

}