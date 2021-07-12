import styled from 'styled-components';

export const Background = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Menu = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
        display: flex;
        align-items: center;
    }
`;

export const Image = styled.div`
    background-color: #FFFFFF;
    width: 88px;
    height: 34px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
        height: 15px;
    }
`;

export const Button = styled.button`
    border: 0;
    border-left: 2px solid #5292C1;
    margin: 0;
    padding: 0 18px;
    width: auto;
    overflow: visible;
    background: transparent;
    cursor: pointer;
    height: 20px;
    color: white;
    font-size: 14px;
    font-weight: 400;

    :hover {
        color: rgba(255,255,255,0.7);
    }
`;

export const NoBorderButton = styled.button`
    border: 0;
    margin: 0;
    padding: 0 18px;
    width: auto;
    overflow: visible;
    background: transparent;
    cursor: pointer;
    height: 20px;
    color: white;
    font-size: 14px;
    font-weight: 400;

    :hover {
        color: rgba(255,255,255,0.7);
    }
`;

export const MainButton = styled.button`
    margin: 0;
    border: 0;
    padding: 0 18px;
    width: auto;
    overflow: visible;
    background: transparent;
    cursor: pointer;
    height: 20px;
    color: white;
    font-size: 14px;
    font-weight: 600;

    :hover {
        color: rgba(255,255,255,0.7);
    }
`;

export const Input = styled.p`
    width: 185px;
    height: 34px;
    border-radius: 20px;
    background-color: #5579A1;
    display: flex;
    align-items: center;
    padding: 10px;

    .icon {
        height: 16px;
        color: #FFFFFF;
    }

    input {
        background: none;
        border: 0;
        width: 70%;
        margin-left: 10px;
        color: #FFFFFF;
    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        color: rgba(255,255,255,0.6);
        font-weight: 100;
        font-size: 12px;
    }
`;