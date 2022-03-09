import React from "react";

const Logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";

    return (
        <h1>Até logo!</h1>
    )
}

export default Logout;
