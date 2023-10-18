import Head from 'next/head'
import Layout from './componentes/Layout.js'

import {useDemoProvider} from './context/demo'

export default function Home() {

    const [estado, setEstado] = useDemoProvider();

    return (
        <Layout content={
            <>
            <h1>Verificando useContext</h1>
            <p>Estado actual : {estado} </p>
            </>
        }
        ></Layout>
    )

}

