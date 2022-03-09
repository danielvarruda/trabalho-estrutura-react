import React from "react";
import OutDefault from "../../Components/Templates/OutDefault";

const Logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";

    return (
        <OutDefault>
            <h1>Até logo!</h1>
        </OutDefault>
    )
}

export default Logout;
