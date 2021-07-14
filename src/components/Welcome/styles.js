import styled from "styled-components";

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    .welcomeName {
        font-size: 26px;
        margin-bottom: 10px;
    }

    .todaysLucky {
        font-size: 14px;
        color: #999999;
    }
`;

export const ProfileNumbers = styled.div`
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
`;

export const EachProfileNumber = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-top: 15px;

    .icon-and-number {
        display: flex;
        align-items: center;
    }

    .label {
        font-size: 12px;
        font-style: italic;
        color: #5A5A5A;
    }

    .number {
        font-size: 13px;
        font-style: italic;
        color: #2E7BB4;
        margin-left: 3px;
    }

    .icons {
        height: 14px;
        width: 42px;
        display: flex;
        position: relative;
    }
`;

export const Transparency = styled.div(info => ({
    position: 'absolute',
    right: 0,
    height: '14px',
    width: `calc(100% - ${info.size})`,
    backgroundColor: 'rgba(255,255,255,0.7)',
}));