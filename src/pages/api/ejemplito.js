/* Ejemplito de APi con JSOn */


export default function ejemplito( req, res) {
    res.status(200).json( { "codigo" : "20239999" , "nombre": "Pepito Perez", "Ciclo" : "7"} )
}