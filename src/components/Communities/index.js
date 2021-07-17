
import { Title, Images, More, Subheading } from "./styles";

import Link from 'next/link';
import React, { useEffect, useState } from "react";

import { useDefineCommunity } from "../../context/Community";
import { getRecords, findImage } from "../../utils/datoConfig";
import ReactLoading from 'react-loading';

export default function CommunitiesHomePage() {
    
    const { defineCommunity, setDefineCommunity } = useDefineCommunity();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRecords()
            .then(records => {
                if(!records.length) {
                    setLoading(false);
                    return;
                }
                records.map(async record => {
                    const img = await findImage(record.coverImage.uploadId)
                        
                    const community = {
                        title: record.title,
                        cover_image: img
                    }
                    defineCommunity.push(community);
                    setDefineCommunity([...defineCommunity]);
                    setLoading(false);
                })
            })
    }, [])

    return (
        <>
            <Title>Comunidades ({defineCommunity.length})</Title>
            <Subheading>
                {loading && 
                    <ReactLoading 
                        className='loading'
                        type={'spin'}
                        color={'rgb(111, 146, 187)'}
                        height={40}
                        width={40} 
                    />
                }
                {!defineCommunity.length && !loading &&
                    <>
                        <p><b>Você ainda não faz parte de nenhuma comunidade...</b></p>
                        <p>Você pode pesquisar comunidades ou criar sua própria comunidade.</p>
                    </>
                }
                <Images>
                    {defineCommunity && !loading &&
                        defineCommunity.map(community => (
                            <a key={community.title}>
                                <img className='community-cover'src={community.cover_image} />
                                <p className='community-title'>{community.title}</p>
                            </a>
                        ))
                    }
                </Images>
            </Subheading>
            <More>
                <Link href='/comunidades'>
                    <button className='button'>Ver mais...</button>
                </Link>
            </More>
        </>
    )
}
