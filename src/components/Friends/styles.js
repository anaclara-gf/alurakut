import styled from "styled-components";

export const Title = styled.div`
    margin-bottom: 10px;
`;

export const Images = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 2px solid #ECF2FA;

    a {
        height: 110px;
        width: 85px;
        margin-bottom: 5px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }

    img {
        border-radius: 8px;
    }

    p {
        margin-top: 3px;
        font-size: 10px;
        font-weight: 600;
        color: #2E7BB4;
    }

`;

export const More = styled.a`
    font-size: 14px;
    display: flex;
    justify-content: flex-end;

    .button {
        background: none;
        border:0;
        cursor: pointer;
    }
`;