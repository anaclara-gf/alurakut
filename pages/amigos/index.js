import Header from '../../src/components/Header';
import Main from '../../src/components/Main';
import Box from '../../src/components/Box';
import Profile from '../../src/components/Profile';
import AllFriends from '../../src/components/AllFriends';

import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const FontConfig = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');
    font-family: 'Rubik', sans-serif;
`;

export default function Amigos(props) {
  const {githubUser, token} = props;

  const [followers, setFollowers] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/followers?per_page=100`, {
      headers: {
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(followersData => {
        editFollowersData(followersData);
      })

    function editFollowersData(data) {
      data.map(follower => {
        fetch(follower.url, {
          headers: {
            Authorization: token
          }
        })
          .then(response => response.json())
          .then(data => {
            const follower = {
              name: data.name,
              img: data.avatar_url
            }

            followers.push(follower);
            setFollowers([...followers]);
          })
      });
      setLoading(false);
    }
  }, [])

  return (
    <FontConfig>
      <Header />
      <Main>
        <div className='profile'>
          <Box>
            <Profile />
          </Box>
        </div>
        
        <div className='welcome'>
          <Box>
            <AllFriends followers={followers} loading={loading}/>
          </Box>
        </div>
      </Main>
    </FontConfig>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
//   const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
//     headers: {
//         Authorization: token
//       }
//   })
//   .then((resposta) => resposta.json())

//   if(!isAuthenticated) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       }
//     }
//   }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser, 
      token
    },
  }
}