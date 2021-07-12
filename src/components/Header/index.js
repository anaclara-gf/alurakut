import { Background, Image, Menu, MainButton, Button, Input, NoBorderButton } from "./styles";
import { FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <Background>
            <Menu>
                <section className='menu'>
                    <Image>
                        <img className='logo' src='http://alurakut.vercel.app/logo.svg' />
                    </Image>
                    <MainButton>
                        Início
                    </MainButton>
                    <Button>
                        Amigos
                    </Button>
                    <Button>
                        Comunidades
                    </Button>
                </section>
                <section className='menu'>
                    <NoBorderButton> 
                        Sair
                    </NoBorderButton>
                    <Input>
                        <FaSearch className='icon'/>
                        <input type='text' placeholder='Pesquisar no Orkut'/>
                    </Input>
                </section>
            </Menu>
        </Background>
    )
}