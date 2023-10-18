import Head from 'next/head'
import Link from 'next/link'

export default props => (
<>
    <header>
        <div>
            &nbsp;
        <p>
            <img src="/logo_texto.png" width="338" />
            En el Pokédex Pokéfanaticos encontrarás información detallada sobre cada Pokémon existente. Para cada criatura podrás ver su información general, los lugares donde es posible atraparlo, los ataques / movimientos que puede aprender cuando aumenta de nivel, y finalmente información útil para utilizar este Pokémon para crianza.
            A continuación, usaremos el tema de  Pokémon para aprender JavaScript
        </p>
        &nbsp;
    </div>
    </header>

    <nav>
        <ul>
            <li><Link href="/pagina1">Inicio</Link></li>
            <li><Link href="/listar">Listado</Link></li>
            <li><Link href="/ejemplouseState">Ejemplo useState</Link></li>            
            <li><Link href="/ejemplouseContext">Ejemplo useContext</Link></li>                        
            <li><Link href="/acercade">Verificar useContext</Link></li>                        
            <li><Link href="/ejemplouseParam">Ejemplo usePAram</Link></li>                        
            <li><Link href="/ejemplouseRouter">Ejemplo useRouter</Link></li>     
            <li><Link href="/contacto">Formulario COntacto</Link></li>     
            <li><Link href="/use/demo1">useEffect 1</Link></li>      
            <li><Link href="/use/demo2">useEffect 2 (Paginar)</Link></li>              
        </ul>
    </nav>

    <main>
        {props.content}
    </main>
    
    <footer>
        <p>Ingenieria de Sistemas &copy; 2023-2 - Programacion Web 703</p>
    </footer>

    </>
)