import Link from "next/link"
import Head from 'next/head'
import Layout from './componentes/Layout.js'

const Index = () => <Layout content={
    <>
        <Head>
            <title>..:: pagina 2 ::..</title>
        </Head>
        <div>
            <h1>Esta es la pagina 2</h1>
            <Link href="pagina3">Ir a la pagina 3</Link>
        </div>
    </>
}

></Layout>

export default Index


