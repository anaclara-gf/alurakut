import styled from 'styled-components';

export const FontConfig = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap');
    font-family: 'Rubik', sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const Main = styled.div`
    display: flex;
    justify-content: center;
    height: 370px;
    width: 100%;
    max-width: 1110px;
    padding: 16px;
    margin: 0 auto;

    .login {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    @media(max-width: 860px) {
        flex-direction: column;
    }
`;

export const DescriptionBox = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 2;
    border-radius: 15px;

    img {
        height: 45px;
        margin-bottom: 35px;
    }

    p {
        text-align: center;
        font-size: 14px;
        line-height: 30px;

        strong {
            color: #D81D99;
        }
    }

    @media(min-width: 860px) {
        margin-right: 20px;
    }

    @media(max-width: 860px) {
        margin-bottom: 20px;
        padding: 16px 50px;
    }
`;

export const Box = styled.div`
    background-color: #F1F9FE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 2;
    border-radius: 15px;
    font-size: 14px;
    text-align: center;
    padding: 16px 50px;

    button {
        width: 100%;
        height: 40px;
        background-color: #2E7BB4;
        color: white;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
    }

    input {
        width: 100%;
        height: 40px;
        background-color: white;
        border: 1px solid #C5C6CA;
        padding: 12px;
        margin-top: 24px;
        margin-bottom: 16px;
        border-radius: 8px;

        &:focus, &:active {
            outline: 0;
            border: 1px solid #C5C6CA;
            box-shadow: 0 0 5px rgba(51, 51, 51, 0.3);
        }
    }

    a {
        font-weight: 600;
        color: #2E7BB4;
        text-decoration: none;
        
    }

    &:first-child {
        margin-bottom: 20px;
        flex: 4;
    }

    &:last-child {
        flex: 1;
    }

    .warning {
        color: red;
        margin-bottom: 10px;
    }

`;