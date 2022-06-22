import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider(props) {
    const stories = [
        {
            id: 1,
            username: "gigo600038838383838338",
            thumb: "images/profile2.jpg",
        },
        {
            id: 2,
            username: "gigo600038838383838338",
            thumb: "images/profile3.jpg",
        },
        {
            id: 3,
            username: "gigo600038838383838338",
            thumb: "images/profile4.jpg",
        },
        {
            id: 4,
            username: "gigo600038838383838338",
            thumb: "images/profile5.jpg",
        },
        {
            id: 5,
            username: "gigo600038838383838338",
            thumb: "images/profile6.jpg",
        },
        {
            id: 6,
            username: "gigo600038838383838338",
            thumb: "images/profile7.jpg",
        },
        {
            id: 7,
            username: "gigo600038838383838338",
            thumb: "images/profile8.jpg",
        },
        {
            id: 8,
            username: "gigo600038838383838338",
            thumb: "images/profile9.jpg",
        },
        {
            id: 9,
            username: "gigo600038838383838338",
            thumb: "images/profile10.jpg",
        },
        {
            id: 10,
            username: "gigo600038838383838338",
            thumb: "images/profile11.jpg",
        },
        {
            id: 11,
            username: "gigo600038838383838338",
            thumb: "images/profile12.jpg",
        },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 3,
    };

    const sliderRef = useRef();

    const goNext = () => {
        sliderRef.current.slickNext();
    };

    const goPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="relative mb-5">
            <div className="absolute left-3 absolute top-1/2 -translate-y-1/2 z-10">
                <a
                    href="#"
                    className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h-6 text-xs shadow-md"
                    onClick={goPrev}
                >
                    <FontAwesomeIcon icon="chevron-left" />
                </a>
            </div>

            <div className="absolute right-3 absolute top-1/2 -translate-y-1/2 z-10">
                <a
                    href="#"
                    className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h-6 text-xs shadow-md"
                    onClick={goNext}
                >
                    <FontAwesomeIcon icon="chevron-right" />
                </a>
            </div>
            <Slider
                className="border border-slate-200 p-4"
                {...settings}
                ref={sliderRef}
            >
                {stories.map((story) => (
                    <div key={story.id}>
                        <div className="flex flex-col items-center space-y-1">
                            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                                <a
                                    href=""
                                    className="block bg-white p-0.5 rounded-full"
                                >
                                    <img
                                        className="rounded-full w-16 h-16"
                                        src={story.thumb}
                                    />
                                </a>
                            </div>
                            <a href="#" className="">
                                <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                    {story.username}
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
