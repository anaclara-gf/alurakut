import styled from "styled-components";

export const Title = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const Images = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 5px;
    margin-bottom: 10px;

    a {
        height: 110px;
        width: 85px;
        margin-bottom: 15px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }

    img {
        height: 85px;
        display: flex;
        border-radius: 8px;
        object-fit: cover;
    }

    p {
        margin-top: 3px;
        font-size: 10px;
        font-weight: 600;
        color: #2E7BB4;
    }
`;