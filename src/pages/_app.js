import '../styles/all.css'
import '../styles/header.css'
import '../styles/nav.css'
import '../styles/cuerpo.css'
import '../styles/footer.css'
import '../styles/media.css'

import { AppProps } from 'next/app'
import { DemoProvider} from './context/demo'

export default function MyApp( {Component, pageProps}) {
    return (
        <DemoProvider>
            <Component { ...pageProps} />
        </DemoProvider>
    )
}


/*
export default function MyApp( {Component, pageProps}) {
    return <Component { ...pageProps} />
}
*/