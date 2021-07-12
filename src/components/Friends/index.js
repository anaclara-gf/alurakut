import { Title, Images, More } from "./styles";

import data from '../../utils/users.json';

export default function Friends() {
    return (
        <>
            <Title>Meus amigos ({data.friends.length})</Title>
            <Images>
                {data.friends.map(friend => (
                    <a key={friend}>
                        <img src={friend["img-url"]} />
                        <p>{friend.name}</p>
                    </a>
                ))}
            </Images>
            <More>
                <button className='button'>Ver mais...</button>
            </More>
        </>
    )
}