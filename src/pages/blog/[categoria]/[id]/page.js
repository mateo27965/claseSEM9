// Directiva
'use client'

import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

import Layout from '../../../componentes/Layout'

export default function Ejemplo() {

    const parametros = useParams()
    const ruta = usePathname()

    return(
        <Layout content={
            <>
                <section>
                    <h1>Ekjemplo de useParams</h1>
                    <p>bla bla bla</p>
                </section>
                <aside>
                    <ul>
                        <li>Categoria : {parametros['categoria'] } </li>
                        <li>ID : {parametros['id'] } </li>
                        <li>RUTA : {ruta } </li>
                    </ul>
                </aside>
            </>
        }
        ></Layout>
    )


}
