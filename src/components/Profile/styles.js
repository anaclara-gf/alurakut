import styled from "styled-components";

export const Section = styled.section`
    border-top: 2px solid #ECF2FA;
    padding: 12px 0;

    .name {
        font-weight: 600;
        color: #2E7BB4;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .info {
        font-weight: 200;
        color: #999999;
        font-size: 12px;
    }

    .perfil {
        display: flex;
        justify-content: space-between;
    }
`;

export const Button = styled.a`
    display: flex;
    cursor: pointer;
    margin-bottom: 16px;
    font-size: 12px;
    color: #2E7BB4;
    align-items: center;

    .image {
        margin-right: 5px;
    }

    .perfilWrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .perfil {
        display: flex;
        align-items: center;
    }
`;

export const ProfilePic = styled.div`
    margin-bottom: 15px;
`;