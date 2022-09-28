import React, { useState } from "react";
import Modal from "./Modal";

function ModalSettings(props) {
    return (
        <Modal {...props} size="xs">
            <ul className="w-full text-sm">
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Change Password
                    </a>
                </li>
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Nametag
                    </a>
                </li>
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Apps and Websites
                    </a>
                </li>
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Notifications
                    </a>{" "}
                </li>
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Edit Profile
                    </a>{" "}
                </li>
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Report a Problem
                    </a>
                </li>
                <li>
                    <a href="#" className="border-b text-center py-3 block">
                        Log Out
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

export default ModalSettings;
