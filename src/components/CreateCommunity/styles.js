import styled from "styled-components";

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 18px;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .warning {
        font-size: 10px;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        background-color: #BD3C33;
        border-radius: 32px;
        color: white;
        margin-bottom: 18px;
    }

    .file-name {
        font-size: 10px;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        background-color: #97BD5F;
        border-radius: 32px;
        margin-bottom: 18px;
    }

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

    .cover-image-wrap {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;

        p {
            color: rgba(0,0,0,0.6);
            font-weight: 100;
            font-size: 13px;
            width: 35%;
            margin-left: 15px;
        }
    }

    .cover-image {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border: 0;
        width: 100%;
        border-radius: 32px;
        background-color: rgb(111, 146, 187);
        padding: 0 15px;
        border: 2px solid #F4F4F4;
        margin-left: 20px;
        cursor: pointer;

        label {
            color: white;
            font-weight: 100;
            font-size: 12px;
        }
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
        font-size: 16px;
    }

    input[type='file'] {
        display: none
    }
`;

