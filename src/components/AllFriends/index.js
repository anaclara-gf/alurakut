import { Title, Images } from "./styles";

import data from '../../utils/users.json';

export default function AllFriends() {
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
        </>
    )
}