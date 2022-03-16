import React from "react";

const CustomModal = (props) => {
    return (
        <div class="custom_modal">
            <div class="modal">
                <button 
                    class="close" 
                    onClick={props.onHide}
                >
                    x
                </button>

                {props.children}
            </div>
        </div>
    );
}

export default CustomModal;