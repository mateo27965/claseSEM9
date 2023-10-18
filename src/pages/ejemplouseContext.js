import Head from 'next/head'
import Layout from './componentes/Layout.js'

import {useDemoProvider} from './context/demo'

export default function Home() {

    const [estado, setEstado] = useDemoProvider();

    return (
        <Layout content={
            <>
            <h1>Probando useContext</h1>
            <p>Estado actual : {estado} </p>
            <button onClick={  () => {
                estado == 'ON' ? setEstado('OFF') : setEstado('ON')
            }}
            > Switch</button>
            </>
        }
        ></Layout>
    )

}

