import React from "react";

import { Modal } from "react-bootstrap";

const CustomModal = (props) => {
    return (
        <Modal {...props}>
            <div>
                <button class="close">x</button>

                { props.children }
            </div>
        </Modal>
    );
}

export default CustomModal;