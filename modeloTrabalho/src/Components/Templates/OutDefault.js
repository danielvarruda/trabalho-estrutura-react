import React from "react";

const OutDefault = props => {
    return (
        <section className="window_view">
            <div className="page">
                { props.children }
            </div>
        </section>
    );
}

export default OutDefault;