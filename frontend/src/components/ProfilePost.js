import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImageUrl } from "../Helpers";

export default function ProfilePost(props) {
    const [showOverlay, setShowOverlay] = useState(false);

    const { image, showCurrentPost } = props;

    return (
        <div
            className={`relative overflow-hidden w-full pt-[100%]`}
            onMouseEnter={() => setShowOverlay(true)}
        >
            <a
                href="#"
                onClick={() => {
                    showCurrentPost();
                }}
            >
                <div
                    className={`bg-gray-800 bg-opacity-60 h-full w-full absolute inset-0 z-10 flex items-center justify-center text-white ${
                        showOverlay ? "" : "hidden"
                    }`}
                    onMouseLeave={() => setShowOverlay(false)}
                >
                    <FontAwesomeIcon icon={"heart"} />{" "}
                    <span className="ml-2">200</span>
                    <FontAwesomeIcon icon={"comment"} className="ml-8" />{" "}
                    <span className="ml-2">200</span>
                </div>
            </a>
            <img
                src={getImageUrl(image)}
                className="absolute inset-0 object-cover w-full h-full"
            />
        </div>
    );
}
