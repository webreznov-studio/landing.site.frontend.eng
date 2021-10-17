import React from 'react';

import SEO from '../components/seo';
import {Link} from 'gatsby';

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <h1>NOT FOUND!!!</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to={'/'}>На главную</Link>
    </>
);

export default NotFoundPage;
