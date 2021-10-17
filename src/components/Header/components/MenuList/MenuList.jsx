import React from 'react';
import {ListItem, MenuListStyled} from './styles';
import {Link} from 'gatsby';

export const MenuList = ({isShow, onClose}) => {
    return (
        <MenuListStyled $isShow={isShow}>
            <div onClick={() => onClose(false)} style={{cursor: 'pointer'}}>X</div>
            <ListItem>
                <li>
                    <Link to={'/проекты'}>Проекты</Link>
                </li>
                <li>
                    <Link to={'/портфолио'}>Портфолио</Link>
                </li>
                <li>
                    <Link to={'/услуги-и-цены'}>Услуги и цены</Link>
                </li>
            </ListItem>
        </MenuListStyled>
    );
};
