import React from 'react';
import './services.css';

const Card = (props) => {
    const renderItem = (arr) => {
        return arr.map((el, ind) => {
            return (
                <li className="list_item" key={ind}>
                    {el}
                </li>
            );
        });
    };
    const clickHandler = (text) => {
        props.setShow(text);
        props.setInfo(props.price);
        return () => (props.setShow ? props.setShow(true) : null);
    };
    return (
        <div className="card">
            <div>
                <h3 className="card_title">{props.title}</h3>
                <ul className="card_list">{renderItem(props.items)}</ul>
            </div>

            <div style={{ textAlign: 'center' }}>
                <strong className="card_price">{props.price}</strong>
                <p>До {props.counter} блоков</p>
                <button className="card_btn" onClick={() => clickHandler(props.title)}>
                    Оставить заявку
                </button>
            </div>
        </div>
    );
};

const Services = (props) => (
    <section className="services">
        <div className="container">
            <Card
                title="Стандартный"
                items={[
                    'Разработка сайта по брифу заказчика',
                    'Анализ конкурентов заказчика',
                    'Кликабельные почта и номер телефона',
                    'Загрузка фавикона (мини-иконка сайта)',
                    'Уникальный, проработанный дизайн',
                ]}
                price="До 10 000 RUB/5-7 дней"
                counter="5"
                info={'10000rub 5-7days'}
                setShow={props.setShow}
                setInfo={props.setInfo}
            />

            <Card
                title="Оптимальный"
                items={[
                    'Разработка сайта по брифу заказчика',
                    'Анализ конкурентов заказчика',
                    'Кликабельные почта и номер телефона',
                    'Загрузка фавикона (мини-иконка сайта)',
                    'Уникальный, проработанный дизайн',
                    'Анализ конкурентов заказчика',
                ]}
                price="До 20 000 RUB/7-14 дней"
                counter="9"
                info={'20000rub 7-14days'}
                setShow={props.setShow}
                setInfo={props.setInfo}
            />

            <Card
                title="Премиум"
                items={[
                    'Весь оптимальный тариф',
                    `Доменное имя на 1 год в подарок
        (покупка/настройка/подключение)`,
                    `SLL-сертификат / безопасное подключение
        ("зеленый замочек")`,
                    `Подключение систем веб-аналитики: 
        Яндекс.Метрики и Вебвизора`,
                    'Интеграция с Bitrix24 или amoCRM',
                    'Разработка логотипа',
                    `Настройка рекламной кампании
        Yandex.Direct`,
                    `Настройка рекламной кампании
        Google AdWords`,
                ]}
                price="От 30 000 RUB/от 21 дня"
                counter="15"
                info={'30000rub 21+days'}
                setShow={props.setShow}
                setInfo={props.setInfo}
            />
        </div>
    </section>
);

export default Services;
