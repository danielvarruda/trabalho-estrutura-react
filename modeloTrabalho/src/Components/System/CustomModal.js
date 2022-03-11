import React from "react";

const CustomModal = (props) => {
    if (props.show) {
        return (
            <div className="custom_modal">
                <div className="modal">
                    { props.children }
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default CustomModal;