'use client'

import Layout from './componentes/Layout.js'
import { useRouter } from 'next/router.js'

export default function Ejemplo() {

    const router = useRouter()

    return(
        <Layout content= {
            <>
            <br></br>
            <button onClick={ () => router.push('/listar')}>Navegar</button>
            </>
        }
        ></Layout>
    )

}