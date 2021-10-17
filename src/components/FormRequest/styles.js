import styled from 'styled-components';

export const FormRequestWrapper = styled.div`
    max-width: 983px;
    width: 100%;
    margin: 0 auto;
    padding: 84px 0;
    margin-top: 255px;
    display: flex;
    justify-content: center;
    border: 2px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    border-radius: 54px;
    @media all and (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        width: 95%;
    }
`;

export const InputStyled = styled.input`
    font-size: 24px;
    color: #ffffff;
    width: 604px;
    background: none;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    outline: none;
    margin-bottom: 135px;
    &:focus {
        border-color: #bc11e2;
        box-shadow: 0px 13px 19px -9px #bc11e2;
    }
    @media all and (max-width: 768px) {
        width: 280px;
        margin-bottom: 50px;
    }
`;

export const ButtonStyled = styled.input`
    max-width: 314px;
    width: 100%;
    height: 72px;
    background: #d39c0f;
    border-radius: 54px;
    border: none;
    outline: none;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    font-size: 24px;
    &:hover {
        background: #bd11e2;
        cursor: pointer;
    }
`;

export const ItemWrapper = styled.div`
    span {
        display: block;
    }
`;

export const LabelFieldStyled = styled.span`
    color: grey;
`;

export const ErrorTextStyled = styled.span`
    color: red;
`;

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 86px;
    a {
        margin: 10px 0;
        transition: all 0.3s ease-in-out;
        img {
            width: 70px;
            height: 70px;
        }
    }
    a:hover {
        transform: rotate(360deg);
    }
`;
