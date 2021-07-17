import { Title, Images, More } from "./styles";
import Link from 'next/link';

export default function Friends({followers}) {
    return (
        <>
            <Title>Meus amigos ({followers.length})</Title>
            <Images>
                {followers.slice(0,6).map(friend => (
                    <a key={Math.random()}>
                        <img src={friend.img} />
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