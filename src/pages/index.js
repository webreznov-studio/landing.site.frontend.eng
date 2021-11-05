import React, {useState} from 'react';
import Header from '../components/Header/Header';
import {Offer} from '../components/Offer';
import Services from '../components/Services/Services';
// import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';
import SEO from '../components/seo';
import {FormRequest} from '../components/FormRequest';
import 'normalize.css';
import '../styles/common-style.css';
import 'normalize.css';

const IndexPage = () => {
    const [showPopup, toShowPopup] = useState(false);
    const [infoText, setInfoText] = useState('main screen request');
    return (
        <>
            {/* <SEO title='Студия веб-разработок - webreznov' /> */}
            <SEO title='Web development studio - webreznov' />

            <Popup show={showPopup} setShow={toShowPopup} info={infoText} />

            <Header />

            <Offer setShow={toShowPopup} />

            <Services setShow={toShowPopup} setInfo={setInfoText} />

            {/* <Contact /> */}

            <FormRequest />

            <Footer />
        </>
    );
};

export default IndexPage;
