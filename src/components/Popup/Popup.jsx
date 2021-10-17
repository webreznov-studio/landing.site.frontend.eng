import React, {useState} from 'react';
import qs from 'qs';
import InputMask from 'react-input-mask';

import '../Contact/contact-form.css';
import './popup.css';

import telegram from '../../images/social-icons/telegram2.png';
import whatsapp from '../../images/social-icons/whatsapp2.png';
import vk from '../../images/social-icons/vk2.png';
import inst from '../../images/social-icons/inst2.png';
import phoneBg from '../../images/phone-015.png';
import axios from 'axios';
import links from '../constLinks';
import {PopupWrapper} from './styles';

const Popup = (props) => {
    const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i;
    const mask = [firstLetter];
    // const [infoZakaz, setInfoZakaz] = useState('')
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [titleForm, setTitleForm] = useState('Оставьте свои контактные данные');
    const thanksResponse = 'Спасибо за обращение, я скоро свяжусь с вами!';
    const errorResponse = 'Произошла ошибка. Повторите отправку.';

    const handlerSendMail = (e) => {
        e.preventDefault();
        if (!emailInput || !nameInput || !phoneInput) return;
        setIsDisabled(true);
        axios({
            method: 'POST',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            data: qs.stringify({
                clientName: nameInput,
                email: emailInput,
                siteType: 'тип сайта неопределен'
            }),
            url: 'http://localhost:8084/api/email/add',
        })
            .then(function (response) {
                setTitleForm(thanksResponse);
                setEmailInput('');
                setNameInput('');
                setPhoneInput('');
            })
            .catch(function (error) {
                setTitleForm(errorResponse);
                setIsDisabled(false);
            });
    };

    if (props.show) {
        return (
            <PopupWrapper onClickCapture={() => props.setShow(false)} className='popup_wrapper'>
                <div onClickCapture={() => props.setShow(true)} className='popup_wrapper_block'>
                    <form onSubmit={handlerSendMail} className='form' id='form'>
                        <h2 className='form_title'>{titleForm}</h2>
                        <div className='form_fields'>
                            <InputMask
                                onChange={!isDisabled ? (e) => setNameInput(e.target.value) : null}
                                value={nameInput}
                                mask={mask}
                                maskChar=' '
                                type='text'
                                className='form_fields_input'
                                placeholder='Ваше имя'
                                required
                            />
                            <InputMask
                                onChange={!isDisabled ? (e) => setPhoneInput(e.target.value) : null}
                                value={phoneInput}
                                mask='+7\999 999 99 99'
                                maskChar='_'
                                type='phone'
                                className='form_fields_input'
                                placeholder='Ваш телефон'
                                required
                            />
                            <input
                                onChange={!isDisabled ? (e) => setEmailInput(e.target.value) : null}
                                value={emailInput}
                                type='email'
                                className='form_fields_input'
                                placeholder='Ваш email'
                                required
                            />
                            <input type='submit' disabled={isDisabled} className='form_fields_btn' value='отправить' />
                            <button onClickCapture={() => props.setShow(false)} className='form_close' title='закрыть окно'>
                                X
                            </button>
                            {/* <input style={{"display":"none"}} onChange={null} readOnly value={props.info}/> */}
                        </div>
                        <div className='form_social'>
                            <a href={links.TELEGRAM} rel='noreferrer' target='_blank'>
                                <img src={telegram} alt='telegram' />
                            </a>
                            <a href={links.WHATSUP} rel='noreferrer' target='_blank'>
                                <img src={whatsapp} alt='telegram' />
                            </a>
                            <a href={links.VK} rel='noreferrer' target='_blank'>
                                <img src={vk} alt='vk' />
                            </a>
                            <a href={links.INST} rel='noreferrer' target='_blank'>
                                <img src={inst} alt='inst' />
                            </a>
                        </div>
                        <img className='form_bg' src={phoneBg} alt='phone' />
                    </form>
                </div>
            </PopupWrapper>
        );
    } else {
        return <></>;
    }
};

export default Popup;
