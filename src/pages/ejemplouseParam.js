import Link from 'next/link'

import Layout from './componentes/Layout.js'

export default function listado() {

    return (
        <Layout content={
            <>
            <ul>
                <li><Link href='/blog/ruta1/ruta2/page'>Ejemplo 1</Link></li>
                <li><Link href='/blog/qwerty/987654/page'>Ejemplo 2</Link></li>
                <li><Link href='/blog/abc999/2023/page'>Ejemplo 3</Link></li>
                <li><Link href='/blog/pokemon1/pikachu1/page'>Ejemplo 4</Link></li>
                <li><Link href='/blog/xxxyyyzz/cualquiercosa/page'>Ejemplo 5</Link></li>
                <li><Link href='/blog/Pepito/Luisito/page'>Ejemplo 6</Link></li>

            </ul>
            </>
        }
        ></Layout>
    )

}