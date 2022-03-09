import React from "react";

import NavigationMenu from "./Menu/NavigationMenu";

const HeaderPage = props => {
    return (
        <>
            <header>
                PROJETO TESTE
            </header>

            <NavigationMenu logged={props.logged} />
        </>
    );
}

export default HeaderPage;