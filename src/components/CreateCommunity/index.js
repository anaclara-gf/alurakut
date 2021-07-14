import { Title, Form } from "./styles";

export default function CreateCommunity() {
    return (
        <>
            <Title>Criar comunidade</Title>

            <Form>
                <input type='text' placeholder='Qual vai ser o nome da sua comunidade?'/>
                <input type='text' placeholder='URL da imagem da capa da comunidade'/>
            
                <button>Criar Comunidade</button>

            </Form>
        </>
    )
}