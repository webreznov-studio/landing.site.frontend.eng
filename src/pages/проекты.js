import React from "react";
import {Link} from 'gatsby';

const ProjectsPage = () => {
    return (
        <div>
            <h1>Projects</h1>
            <Link to={'/'}>Назад</Link>

            <div>
                <h2><Link to={'/мой-рейтинг-фильмов'}>Рейтинг фильмов</Link></h2>
                <h2>webreznov - audio</h2>
                <h2>литературный портал priyt-dushi</h2>
                <h2>Свадебные приглашения онлайн</h2>
            </div>
        </div>
    );
};

export default ProjectsPage;
