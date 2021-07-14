import styled from "styled-components";

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 18px;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        height: 40px;
        width: 100%;
        border: 0;
        border-radius: 32px;
        background-color: #F4F4F4;
        padding: 0 15px;
        border: 2px solid #F4F4F4;
        margin-bottom: 18px;
    }

    input:focus {
        outline: none;
        border: 2px solid #C5C6CA;
        box-shadow: 1px 1px 5px #EDEDED;
    }

    input::placeholder {
        color: rgba(0,0,0,0.6);
        font-weight: 100;
        font-size: 12px;
    }

    button {
        background-color: rgb(111, 146, 187);
        border: 0;
        color: white;
        border-radius: 32px;
        height: 40px;
        width: 100%;
        font-weight: 600;
        cursor: pointer;
    }
`;

