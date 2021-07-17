import { Title, Images } from "./styles";

import ReactLoading from 'react-loading';

export default function AllFriends({followers, loading}) {
    return (
        <>
            {loading && 
                <ReactLoading 
                    className='loading'
                    type={'spin'}
                    color={'rgb(111, 146, 187)'}
                    height={40}
                    width={40} 
                />
            }
            {followers.length && !loading &&
                <>
                    <Title>Meus amigos ({followers.length})</Title>
                    <Images>
                        {followers.map(friend => (
                            <a key={friend}>
                                <img src={friend.img} />
                                <p>{friend.name}</p>
                            </a>
                        ))}
                    </Images>
                </>
            }
        </>
    )
}