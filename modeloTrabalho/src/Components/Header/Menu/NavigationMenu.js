import React, { useEffect, useState } from "react";

import {systemMenu} from "./ItensMenu";
import {itensMenu} from "./ItensMenu";

const NavigationMenu = props => {

    const [listMenu, setListMenu] = useState([]);

    useEffect(() => {
        const logged = props.logged;

        if (logged) {
            setListMenu(systemMenu);
        } else {
            setListMenu(itensMenu);
        }
    });

    return (
        <nav>
            <ul>
                {listMenu.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <a href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavigationMenu;