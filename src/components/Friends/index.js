import { Title, Images, More } from "./styles";
import Link from 'next/link';

import data from '../../utils/users.json';

export default function Friends() {
    return (
        <>
            <Title>Meus amigos ({data.friends.length})</Title>
            <Images>
                {data.friends.slice(0,6).map(friend => (
                    <a key={friend}>
                        <img src={friend["img-url"]} />
                        <p>{friend.name}</p>
                    </a>
                ))}
            </Images>
            <More>
                <Link href='/amigos'>
                    <button className='button'>Ver mais...</button>
                </Link>
            </More>
        </>
    )
}