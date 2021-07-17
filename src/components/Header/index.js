import { Background, Image, Menu, Input, InputPortable } from "./styles";
import Link from 'next/link';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import React, {useState} from "react";

export default function Header() {
    const router = useRouter();

    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);

    function handleLogout() {
        nookies.destroy(null, 'USER_TOKEN');
        router.push('/login');
    }
    
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
                    <button onClick={handleLogout} className="borderlessButton button"> 
                        Sair
                    </button>
                    <section className='full-header search'> 
                        <img className="icon" src="http://alurakut.vercel.app/icons/search.svg" />
                        <input type='text' placeholder='Pesquisar no Orkut'/>
                    </section>
                </section>
                <section className='menuHamburguer'>
                    <button 
                        className="portableButtons"
                        onClick={() => search ? setSearch(false) : setSearch(true)}
                    > 
                        <img src="http://alurakut.vercel.app/icons/search.svg" />
                    </button>
                    {search &&
                        <section className='portable-header search'>
                            <img className="icon" src="http://alurakut.vercel.app/icons/search.svg" />
                            <input type='text' placeholder='Pesquisar no Orkut'/>
                        </section>
                    }
                    <button 
                        className="portableButtons"
                        onClick={() => menu ? setMenu(false) : setMenu(true)}
                    > 
                        <img src="https://alurakut.vercel.app//icons/menu-closed.svg?v=1" />
                    </button>
                    {menu && 
                        <section className='portable-menu'>
                            <Link href="/">
                                <button>Início</button>
                            </Link>
                            <Link href="/amigos">
                                <button>Amigos</button>
                            </Link>
                            <Link href="/comunidades">
                                <button>Comunidades</button>
                            </Link>
                        </section>
                    }
                </section>
            </Menu>
        </Background>
    )
}