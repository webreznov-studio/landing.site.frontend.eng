import React, {useState} from "react";
import {Link} from "gatsby";
import logo from "../../../../images/logo.png";
import {MenuList} from "../MenuList/MenuList";

export const LogoMenu = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div onClick={() => setIsShow(!isShow)}>
            <Link to="#">
                <img src={logo} alt="" />
            </Link>
            <MenuList isShow={isShow} onClose={setIsShow} />
        </div>
    )
}