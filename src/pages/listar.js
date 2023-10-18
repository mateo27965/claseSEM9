import Link from 'next/link'
import Head from 'next/head'
import Layout from './componentes/Layout.js'

import pokedex from '../json/pokedex.json'

const listado = () => <Layout content={
<>
    <Head>
        <title>..::Listado de Pokemones::..</title>
    </Head>
    <h1>Pokemones disponibles:</h1>
    <ul>
        { 
        Object.entries(pokedex).map( (value,index) => {
            return  (
                <li key={index}>
                    <Link href='/pokemon/[id]' as={'/pokemon/'+value[0]}>
                        {value[1].nombre}
                    </Link>
                </li>
            )
        }
        )}
    </ul>
</>

}
></Layout>

export default listado