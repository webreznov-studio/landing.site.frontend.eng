import React from 'react';
import {BoxStyled, LabelStyled, WrapperStyled} from './styles';

export const Checkbox = React.forwardRef((props) => {
    const length = 126.36953735351562; // hard-coded length dependent on the path used
    const {selected, onClick, label, effect = 'checkmark'} = props;
    return (
        <div style={{padding: '14px 0'}}>
            <WrapperStyled className='wrapper' onClick={onClick}>
                <BoxStyled />
                <svg viewBox='0 0 100 100' style={{height: 35, width: 35}} xmlns='http://www.w3.org/2000/svg'>
                    <path
                        stroke='lightgreen'
                        strokeWidth='14'
                        fill='none'
                        d='M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'
                        strokeDashoffset={selected ? 0 : length}
                        style={{
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            transition: 'stroke-dashoffset 0.2s ease-in-out',
                            strokeDasharray: `${length} ${length}`,
                        }}
                    />
                </svg>
                {label && (
                    <LabelStyled className='label' style={{color: selected ? 'lightgreen' : 'white'}}>
                        {label}
                    </LabelStyled>
                )}
            </WrapperStyled>
        </div>
    );
});
