import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import GET_STORIES from "../graphql/GET_STORIES";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Stories(props) {
    const { loading, error, data } = useQuery(GET_STORIES);
    const sliderRef = useRef();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 3,
    };

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
                    className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h-6 text-xs shadow-md cursor-pointer"
                    onClick={goPrev}
                >
                    <FontAwesomeIcon icon="chevron-left" />
                </a>
            </div>

            <div className="absolute right-3 absolute top-1/2 -translate-y-1/2 z-10">
                <a
                    className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h-6 text-xs shadow-md cursor-pointer"
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
                {data.stories.map((story) => (
                    <div key={story.id}>
                        <div className="flex flex-col items-center space-y-1">
                            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                                <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                    <img
                                        className="rounded-full w-16 h-16"
                                        src={story.image}
                                    />
                                </a>
                            </div>
                            <a className="cursor-pointer">
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
