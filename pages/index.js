import Main from '../src/components/Main';
import Box from '../src/components/Box';
import Header from '../src/components/Header';
import Profile from '../src/components/Profile';
import Friends from '../src/components/Friends';
import Welcome from '../src/components/Welcome';
import CommunitiesHomePage from '../src/components/Communities';

import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import React, { useEffect, useState } from 'react';

import DefineCommunityProvider from '../src/context/Community';

import styled from 'styled-components';

const FontConfig = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');
    font-family: 'Rubik', sans-serif;
`;

export default function Home(props) {
  const {githubUser, token} = props;

  const [followers, setFollowers] = useState([])

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
      })
    }
  }, [])

  return (
    <FontConfig>
      <Header />
      <Main>
        <div className='profile'>
          <Box>
            <Profile/>
          </Box>
        </div>
        
        <div className='welcome'>
          <Box>
            <Welcome />
          </Box>
        </div>
        
        <div className='profileRelations'>
          <Box>
            <Friends followers={followers}/>
          </Box>
          <DefineCommunityProvider>
            <Box>
              <CommunitiesHomePage />
            </Box>
          </DefineCommunityProvider>

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

  const githubData = await fetch(`https://api.github.com/users/${githubUser}`);
  const data = await githubData.json();

  if(data.message === 'Not Found'){
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {
      githubUser, 
      token
    },
  }
}
