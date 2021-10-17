import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import telegram from '../../images/social-icons/telegram2.png';
import whatsapp from '../../images/social-icons/whatsapp2.png';
import vk from '../../images/social-icons/vk2.png';
import inst from '../../images/social-icons/inst2.png';
import './contact.css';
import './contact-form.css';
import axios from 'axios';
import links from '../constLinks';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [titleForm, setTitleForm] = useState('Оставьте свои контактные данные');
    const [thanksResponse] = useState(
        'Спасибо за обращение, я скоро свяжусь с вами!'
    );
    const [errorResponse] = useState('Произошла ошибка. Повторите отправку.');
    const [isDisabled, setIsDisabled] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!email || !name || !phone) return;
        setIsDisabled(true);

        axios
            .post('https://webreznov-portfolio.herokuapp.com/api/email/add-user-contact', null, {
                params: {
                    name: name,
                    email: email,
                    phone: phone,
                }
            })
            .then((res) => {
                setTitleForm(thanksResponse);
                setName('');
                setPhone('');
                setEmail('');
            })
            .catch((err) => {
                setTitleForm(errorResponse);
                setIsDisabled(false);
            });
    };
    return (
        <section className="contact" id="contact">
            <div className="container">
                <form onSubmit={submitHandler} className="form" id="form">
                    <div className="form_fields">
                        <h2>{titleForm} </h2>
                        <input
                            onChange={!isDisabled ? (e) => setName(e.target.value) : null}
                            value={name}
                            type="text"
                            className="form_fields_input"
                            placeholder="Ваше имя"
                        />
                        <InputMask
                            onChange={!isDisabled ? (e) => setPhone(e.target.value) : null}
                            value={phone}
                            mask="+7\999 999 99 99"
                            maskChar="_"
                            type="phone"
                            className="form_fields_input"
                            placeholder="Ваш телефон"
                        />
                        <input
                            onChange={!isDisabled ? (e) => setEmail(e.target.value) : null}
                            value={email}
                            type="email"
                            className="form_fields_input"
                            placeholder="Ваш email"
                        />
                        <input
                            type="submit"
                            disabled={isDisabled}
                            className="form_fields_btn"
                            value="отправить"
                        />
                    </div>
                    <div className="form_social">
                        <a href={links.TELEGRAM} rel="noreferrer" target="_blank">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href={links.WHATSUP} rel="noreferrer" target="_blank">
                            <img src={whatsapp} alt="telegram" />
                        </a>
                        <div className="separate"></div>
                        <a href={links.VK} rel="noreferrer" target="_blank">
                            <img src={vk} alt="vk" />
                        </a>
                        <a href={links.INST} rel="noreferrer" target="_blank">
                            <img src={inst} alt="inst" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
