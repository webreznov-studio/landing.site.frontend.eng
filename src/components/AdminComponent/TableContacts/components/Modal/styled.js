import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;
 export const ModalWindow = styled.div`
    width: 100%;
    max-width: 600px;
    border-radius: 15px;
    background: #ffffff;
    padding: 16px;
    color: #232323;
 `;
