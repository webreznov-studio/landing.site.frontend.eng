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
                <p>Before {props.counter} sections</p>
                <button className="card_btn" onClick={() => clickHandler(props.title)}>
                    request
                </button>
            </div>
        </div>
    );
};

const Services = (props) => (
    <section className="services">
        <div className="container">
            <Card
                title="Standart"
                items={[
                    // 'Разработка сайта по брифу заказчика',
                    // 'Анализ конкурентов заказчика',
                    // 'Кликабельные почта и номер телефона',
                    // 'Загрузка фавикона (мини-иконка сайта)',
                    // 'Уникальный, проработанный дизайн',
                    'Development of the Customer Brief Site',
                    'Analysis of Customer Competitors',
                    'Clickable Mail and Phone Number',
                    'Useing custom Favikon (Site Mini-icon)',
                    'Unique, Developed Design',
                ]}
                price="To 170 USD/5-7 days"
                counter="5"
                info={'10000rub 5-7days'}
                setShow={props.setShow}
                setInfo={props.setInfo}
            />

            <Card
                title="Optimal"
                items={[
                    // 'Разработка сайта по брифу заказчика',
                    // 'Анализ конкурентов заказчика',
                    // 'Кликабельные почта и номер телефона',
                    // 'Загрузка фавикона (мини-иконка сайта)',
                    // 'Уникальный, проработанный дизайн',
                    // 'Анализ конкурентов заказчика',
                    'Development of the Customer Brief Site',
                    'Analysis of Customer Competitors',
                    'Clickable Mail and Phone Number',
                    'Useing custom Favikon (Site Mini-icon)',
                    'Unique, Developed Design',
                    'Analysis of Customer Competitors',
                ]}
                price="TO 350 USD/7-14 days"
                counter="9"
                info={'20000rub 7-14days'}
                setShow={props.setShow}
                setInfo={props.setInfo}
            />

            <Card
                title="Premium"
                items={[
                    '+ Optimal',
                    'Domain name (registration/setting/setup)',
                    'SSL-certificate / secure connection ("green plug")',
                    'Connecting web analytics systems',
                    'Integration with CRM',
                    'Setting ads company Google AdWords',
                    'Development logo',
                    // 'Весь оптимальный тариф',
                    // `Доменное имя на 1 год в подарок (покупка/настройка/подключение)`,
                    // `SLL-сертификат / безопасное подключение ("зеленый замочек")`,
                    // `Подключение систем веб-аналитики: Яндекс.Метрики и Вебвизора`,
                    // 'Интеграция с CRM',
                    // 'Разработка логотипа',
                    // `Настройка рекламной кампании Yandex.Direct`,
                    // `Настройка рекламной кампании Google AdWords`,
                ]}
                price="To 500 USD/21 days and more"
                counter="15"
                info={'30000rub 21+days'}
                setShow={props.setShow}
                setInfo={props.setInfo}
            />
        </div>
    </section>
);

export default Services;