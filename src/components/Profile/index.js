import data from '../../utils/users.json';

import { Section, Button, ProfilePic } from './styles';

export default function Profile() {
    const baseURL = "https://alurakut.vercel.app/icons/";

    return (
        <>
            <ProfilePic>
                <img src={data.owner['img-url']} />
            </ProfilePic>
            <Section>
                <p className='name'>{data.owner.name}</p>
                <p className='info'> {data.owner.gender}, </p>
                <p className='info'> {data.owner.status}, </p>
                <p className='info'> {data.owner.location} </p>
            </Section>
            <Section>
                <div className='perfil'>
                    <Button>
                        <img src={`${baseURL}user.svg`} className='image'/>
                        Perfil
                    </Button>
                    <Button>
                        Editar
                    </Button>
                </div>
                <Button>
                    <img src={`${baseURL}book.svg`} className='image'/>
                    Recados
                </Button>
                <Button>
                    <img src={`${baseURL}camera.svg`} className='image'/>
                    Fotos
                </Button>
                <Button>
                    <img src={`${baseURL}sun.svg`} className='image'/>
                    Depoimentos
                </Button>
            </Section>
        </>
    )
}