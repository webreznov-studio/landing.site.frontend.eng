import React from "react";
import {Link} from 'gatsby';

const ServiceAndPrice = () => {
    return (
        <div>
            <h1>ServiceAndPrice</h1>
            <Link to={'/'}>Назад</Link>
            <ul>
                <li>Одностраничный сайт</li>
                <li>Отправка почты</li>
                <li>Видеофон</li>
                <li>Галлерея фото</li>
                <li>Анимации</li>
                <li>Многостраничный сайт</li>
                <li>Регистрация</li>
                <li>Генерация кодов</li>
                <li>Запись в БД</li>
            </ul>
        </div>
    );
};

export default ServiceAndPrice;
