import React from "react";

export default function Footer() {
    return (
        <footer className="py-5 text-center">
            <ul className="flex flex-row space-x-4 p-2 text-xs items-center	justify-center space-x-10 text-gray-400">
                <li>
                    <a className="cursor-pointer">About</a>
                </li>
                <li>
                    <a className="cursor-pointer">Privacy</a>
                </li>
                <li>
                    <a className="cursor-pointer">Terms</a>
                </li>
            </ul>
        </footer>
    );
}
