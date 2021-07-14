import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 85%;
  margin: 0 auto;

  @media(min-width: 860px) {
    flex-direction: row;
    justify-content: space-between;

    .profile {
      width: 160px;
      height: auto;
    }

    .welcome {
      flex: 1;
      height: auto;
    }

    .profileRelations {
      width: 312px;
      height: auto;
    }
  }

  @media(max-width: 860px) {
    .profile {
      display: none;
    }
  }
`;

export default Main;