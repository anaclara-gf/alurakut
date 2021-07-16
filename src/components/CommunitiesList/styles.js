import styled from "styled-components";

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px; 
`;

export const Communities = styled.ul` 
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 5px;

    a {
        height: 110px;
        width: 85px;
        margin-bottom: 5px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }

    .community-cover {
        width: 85px;
        height: 85px;
        object-fit: cover;
        border-radius: 8px;
    }

    .community-title {
        margin-top: 3px;
        font-size: 10px;
        font-weight: 600;
        color: #2E7BB4;
    }

`;

export const Subheading = styled.div`
    p {
        font-size: 14px;
        color: #333333;
        margin-bottom: 8px;
    }

    .loading {
        width: 100%;
        margin: 0 auto;
    }
`;