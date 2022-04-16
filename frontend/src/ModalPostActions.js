import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";

export default function ModalPostActions(props) {
    return (
        <Modal {...props} size="xs">
            <ul className="w-full text-sm">
                <li>
                    <a
                        href="#"
                        className="border-b text-center text-red-600 font-bold py-3 block"
                    >
                        Report
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="border-b text-center text-red-600 font-bold py-3 block"
                    >
                        Unfollow
                    </a>
                </li>
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Go to Post
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={() => props.setOpen(false)}
                        className="text-center py-3 block"
                    >
                        Cancel
                    </a>
                </li>
            </ul>
        </Modal>
    );
}
