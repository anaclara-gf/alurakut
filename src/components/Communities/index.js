import { Title, Subheading } from "./styles";

import data from '../../utils/users.json';

export default function Communities() {
    return (
        <>
            <Title>Comunidades</Title>
            <Subheading>
                {data.owner.communities > 0 ?
                    <p>Você tem comunidades</p>
                :
                    <>
                        <p><b>Você ainda não faz parte de nenhuma comunidade...</b></p>
                        <p>Você pode pesquisar comunidades ou criar sua própria comunidade.</p>
                    </>
                }
            </Subheading>
        </>
    )
}