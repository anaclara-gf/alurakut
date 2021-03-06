import Header from '../../src/components/Header';
import Main from '../../src/components/Main';
import Box from '../../src/components/Box';
import Profile from '../../src/components/Profile';
import CommunitiesList from '../../src/components/CommunitiesList';
import CreateCommunity from '../../src/components/CreateCommunity';

import DefineCommunityProvider from '../../src/context/Community';

import styled from 'styled-components';

const FontConfig = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');
    font-family: 'Rubik', sans-serif;
`;

export default function Comunidades() {
  return (
    <FontConfig>
      <Header />
      <Main>
        <div className='profile'>
          <Box>
            <Profile />
          </Box>
        </div>
        
        <DefineCommunityProvider>
          <div className='welcome'>
            <Box>
              <CommunitiesList />
            </Box>
          </div>
          
          <div className='profileRelations'>
            <Box>
              <CreateCommunity />
            </Box>
          </div>
        </DefineCommunityProvider>
      </Main>
    </FontConfig>
  )
}