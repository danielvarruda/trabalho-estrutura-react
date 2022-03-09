import React from "react";

import NavigationMenu from "./Menu/NavigationMenu";

const HeaderPage = props => {
    return (
        <>
            <header>
                <p>Ruetter.com</p>
            </header>

            <NavigationMenu logged={props.logged} />
        </>
    );
}

export default HeaderPage;