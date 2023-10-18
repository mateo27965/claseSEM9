import Head from 'next/head'
import Layout from './componentes/Layout.js'

import { useState } from  'react'

const Ejemplo = () => {
    const [ contador, setContador ] = useState(0)
    const contar = () =>  setContador( contador + 1)

    const [ restador, setRestador ] = useState(99)
    const restar = () =>  setRestador( restador - 1)

    return ( <Layout content={
        <>
            <Head>
                <title>..: Ejemplo de estado</title>
            </Head>        
            <section>
                <p>has ejecutado el click {contador} veces </p>
                <button onClick={contar}>Incrementar + </button>
            </section>
            <aside>
            <p>has ejecutado el click {restador} veces </p>
                <button onClick={restar}>Restar - </button>

            </aside>
        </>
    }
    ></Layout>
    )
}

export default Ejemplo