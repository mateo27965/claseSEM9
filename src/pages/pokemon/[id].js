import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../componentes/Layout.js'
import pokedex from '../../json/pokedex.json'

export default () => {
    const router = useRouter()
    const p = pokedex[router.query.id]
    if (!p) return <p></p>

    return <Layout content={
        <>
            <Head>
                <title>...Detalle::...</title>
            </Head>
            <h1>Detalle del Pokemon</h1>
            <section>
                <h2>Nombre: {p.nombre} </h2>
                <p>Clasificacion: {p.clasificacion} </p>
            </section>
            <aside>
                <Image src={p.imagen2} width={400} height={400} alt="Imagen del Pokemon"></Image>
            </aside>
       </>
    }
></Layout>

}