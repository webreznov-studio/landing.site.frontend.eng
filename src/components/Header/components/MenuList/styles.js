import styled from 'styled-components';

export const MenuListStyled = styled.div`
  display: ${props => props.$isShow ? 'block' : 'none'};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px 10px 20px;
  border-radius: 20px 20px 0px 0px;
  background: linear-gradient(180deg, rgba(27, 27, 27, 1) 0%, rgba(73, 19, 225, 1) 100%);
`;

export const ListItem = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  li a {
    display: block;
    color: #f00fff;
    margin: 0 0 14px 0;
    text-decoration: none;
    font-weight: bold;
    &:hover{
      color: #08b04c;
    }
  }
`;
