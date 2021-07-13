import { Title } from "./styles";

export default function CreateCommunity() {
    return (
        <>
            <Title>Criar comunidade</Title>

            <input type='text' placeholder='Qual vai ser o nome da sua comunidade?'/>
            <input type='text' placeholder='Coloque a URL de uma imagem para usarmos de capa da comunidade!'/>
           
            <button>Criar Comunidade</button>
        </>
    )
}