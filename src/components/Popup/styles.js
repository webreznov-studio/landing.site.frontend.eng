import styled from 'styled-components';

export const PopupWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .popup_wrapper_block {
        background: #1b1b1b;
        border-radius: 54px;
        .form .form_fields {
            padding: 26px 64px !important;
        }
    }
`;
