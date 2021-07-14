import { Background, Image, Menu, Input } from "./styles";
import Link from 'next/link';

export default function Header() {
    return (
        <Background>
            <Menu>
                <section className='menu'>
                    <Image>
                        <img className='logo' src='http://alurakut.vercel.app/logo.svg' />
                    </Image>
                    <Link href="/">
                        <button className="mainButton button">Início</button>
                    </Link>
                    <Link href="/amigos">
                        <button className="borderButton button">Amigos</button>
                    </Link>
                    <Link href="/comunidades">
                        <button className="borderButton button">Comunidades</button>
                    </Link>
                </section>
                <section className='menu'>
                    <button className="borderlessButton button"> 
                        Sair
                    </button>
                    <Input> 
                        <img className="icon" src="http://alurakut.vercel.app/icons/search.svg" />
                        <input type='text' placeholder='Pesquisar no Orkut'/>
                    </Input>
                </section>
                <section className='menuHamburguer'>
                    <button className="portableButtons"> 
                        <img src="http://alurakut.vercel.app/icons/search.svg" />
                    </button>
                    <button className="portableButtons"> 
                        <img src="https://alurakut.vercel.app//icons/menu-closed.svg?v=1" />
                    </button>
                </section>
            </Menu>
        </Background>
    )
}