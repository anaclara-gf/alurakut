import { Title } from "./styles";

import data from '../../utils/users.json';

export default function Communities() {
    return (
        <>
            <Title>Comunidades</Title>
            {data.owner.communities > 0 ?
                <p>Você tem comunidades</p>
            :
                <>
                    <p>Você ainda não faz parte de nenhuma comunidade...</p>
                    <p>Você pode pesquisar comunidades ou criar sua própria comunidade.</p>
                </>
            }
        </>
    )
}