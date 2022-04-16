import React, { useState } from "react";

const suggestions = [
    {
        id: 1,
        username: "user234444",
        image: "/images/profile5.jpg",
    },
    {
        id: 2,
        username: "user234444",
        image: "/images/profile6.jpg",
    },
    {
        id: 3,
        username: "user234444",
        image: "/images/profile7.jpg",
    },
    {
        id: 4,
        username: "user234444",
        image: "/images/profile9.jpg",
    },
];

export default function Suggestions(props) {
    return (
        <>
            <div className="flex flex-row pt-5">
                <div className="w-72 font-bold text-gray-500 text-sm">
                    Suggestions For You
                </div>
                <div className="w-32 text-sm text-right">
                    <a href="#" className="text-black-400 font-bold text-xs">
                        See All
                    </a>
                </div>
            </div>

            {suggestions.map((user) => {
                return (
                    <div key={user.id} className="flex py-2">
                        <div className="flex items-center">
                            <a className="inline-block align-top" href="#">
                                <img
                                    className="rounded-full"
                                    src={user.image}
                                    width="35"
                                />
                            </a>
                            <div className="inline-block ml-2">
                                <div className="text-sm font-medium">
                                    {user.username}
                                </div>
                                <div className="text-gray-500 text-xs">
                                    Suggested for you
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 items-center flex justify-end ">
                            <a
                                href="#"
                                className="text-xs text-sky-500 font-bold"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
