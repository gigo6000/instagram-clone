import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPost from "../components/ModalPost";
import ProfilePost from "../components/ProfilePost";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";

export default function Profile(props) {
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("posts");
    const [currentPost, setCurrentPost] = useState(null);
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    const showCurrentPost = (post) => {
        setCurrentPost(post);
        setPostModalOpen(true);
    };

    if (loading) {
        return "Loading...";
    }

    return (
        <>
            <ModalPost
                open={isPostModalOpen}
                setOpen={setPostModalOpen}
                post={currentPost}
            />
            <main className="bg-zinc-50">
                <div className="grid grid-cols-3 mb-10">
                    <div className="bg-green p-3 rounded flex items-start justify-center">
                        <img
                            className="rounded-full"
                            src={data.me.image}
                            width="150"
                        />
                    </div>
                    <div className="bg-green p-3 rounded text-gray-600 col-span-2">
                        <div className="flex items-center">
                            <h1 className="inline-block text-3xl align-bottom block">
                                {data.me.username}
                            </h1>
                            <Link
                                as="button"
                                to="/accounts/edit"
                                className="bg-white ml-3  text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded text-sm"
                            >
                                Edit Profile
                            </Link>
                            <a
                                className="ml-3 cursor-pointer"
                                onClick={() =>
                                    props.setIsSettingsModalOpen(true)
                                }
                            >
                                <FontAwesomeIcon
                                    icon="gear"
                                    className="text-2xl leading-6"
                                />
                            </a>
                        </div>
                        <div className="flex-row py-5 max-w-sm hidden lg:flex">
                            <div className="basis-1/2 ">
                                <strong>{data.me.total_posts}</strong> posts
                            </div>
                            <div className="basis-1/2">
                                <strong className="mr-1">
                                    {data.me.total_followers}
                                </strong>
                                followers
                            </div>
                            <div className="basis-1/2">
                                <strong className="mr-1">
                                    {data.me.total_following}
                                </strong>
                                following
                            </div>
                        </div>
                        <h3 className="font-bold">{data.me.name}</h3>
                        <div className="">{data.me.bio}</div>
                        <a
                            href={data.me.website}
                            target="_blank"
                            className="text-blue-900 font-bold"
                        >
                            {data.me.website}
                        </a>
                    </div>
                </div>

                <div className="flex flex-row p-2 content-center mb-8 space-x-2 md:space-x-10 text-sm font-semibold w-full overflow-scroll">
                    <div className="story w-14  md:w-14 md:w-full">
                        <a href="#">
                            <div className="border p-1 rounded-full">
                                <img
                                    className="rounded-full"
                                    src="images/highlight-twitter.png"
                                    width="80"
                                />
                            </div>
                            <div className="text-center overflow-hidden text-ellipsis ">
                                Twitter
                            </div>
                        </a>
                    </div>
                    <div className="story w-14  md:w-14 md:w-full ">
                        <a href="#">
                            <div className="border p-1 rounded-full">
                                <img
                                    className="rounded-full"
                                    src="images/highlight-youtube.png"
                                    width="80"
                                />
                            </div>
                            <div className="text-center overflow-hidden text-ellipsis ">
                                Youtube
                            </div>
                        </a>
                    </div>
                    <div className="story w-14  md:w-14 md:w-full ">
                        <a href="#">
                            <div className="border p-1 rounded-full">
                                <img
                                    className="rounded-full"
                                    src="images/highlight-facebook.png"
                                    width="80"
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-center overflow-hidden text-ellipsis">
                                    Facebook
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="story w-14  md:w-14 md:w-full ">
                        <a href="#">
                            <div className="border p-1 rounded-full">
                                <img
                                    className="rounded-full"
                                    src="images/highlight-gaming.png"
                                    width="80"
                                />
                            </div>
                            <div className="text-center  overflow-hidden text-ellipsis ">
                                Gaming
                            </div>
                        </a>
                    </div>
                    <div className="story w-14  md:w-14 md:w-full ">
                        <a href="#">
                            <div className="border p-1 rounded-full">
                                <img
                                    className="rounded-full"
                                    src="images/highlight-music.png"
                                    width="80"
                                />
                            </div>
                            <div className="text-center  overflow-hidden text-ellipsis ">
                                Music
                            </div>
                        </a>
                    </div>
                    <div className="story w-14  md:w-14 md:w-full ">
                        <a href="#">
                            <div className="border p-1 rounded-full">
                                <img
                                    className="rounded-full"
                                    src="images/highlight-setup.png"
                                    width="80"
                                />
                            </div>
                            <div className="text-center  overflow-hidden text-ellipsis ">
                                Setup
                            </div>
                        </a>
                    </div>
                    <div className="story w-14  md:w-14 md:w-full ">
                        <a href="#">
                            <div className="border p-1 rounded-full">
                                <img
                                    className="rounded-full"
                                    src="images/highlight-food.png"
                                    width="80"
                                />
                            </div>
                            <div className="text-center  overflow-hidden text-ellipsis ">
                                Food
                            </div>
                        </a>
                    </div>
                    <div className="story w-14  md:w-14 md:w-full ">
                        <a href="#">
                            <div className="border p-1 rounded-full">
                                <img
                                    className="rounded-full"
                                    src="images/highlight-movies.png"
                                    width="80"
                                />
                            </div>
                            <div className="text-center  overflow-hidden text-ellipsis ">
                                Movies
                            </div>
                        </a>
                    </div>
                </div>

                <ul className="flex flex-row p-2 text-sm items-center	justify-center border-t text-gray-400 h-16 lg:hidden">
                    <li className="flex-1 text-center">
                        <b className="text-black block">
                            {data.me.total_posts}
                        </b>{" "}
                        posts
                    </li>
                    <li className="flex-1 text-center">
                        <b className="text-black block">
                            {data.me.total_followers}
                        </b>
                        followers
                    </li>
                    <li className="flex-1 text-center">
                        <b className="text-black block">
                            {data.me.total_following}
                        </b>
                        following
                    </li>
                </ul>

                <ul className="flex flex-row text-2xl lg:text-xs items-center justify-center border-t uppercase text-gray-400 tracking-widest h-16">
                    <a
                        className={`${
                            activeTab === "posts"
                                ? "text-black border-t border-black"
                                : ""
                        } flex justify-center items-center h-full mr-16 cursor-pointer`}
                        onClick={() => setActiveTab("posts")}
                    >
                        <FontAwesomeIcon icon="table-cells" />
                        <span className="hidden lg:inline-block ml-2">
                            Posts
                        </span>
                    </a>
                    <a
                        className={`${
                            activeTab === "reels"
                                ? "text-black border-t border-black"
                                : ""
                        } flex justify-center items-center h-full mr-16 cursor-pointer`}
                        onClick={() => setActiveTab("reels")}
                    >
                        <FontAwesomeIcon icon="play" />
                        <span className="hidden lg:inline-block ml-2">
                            Reels
                        </span>
                    </a>
                    <a
                        className={`${
                            activeTab === "videos"
                                ? "text-black border-t border-black"
                                : ""
                        } flex justify-center items-center h-full mr-16 cursor-pointer`}
                        onClick={() => setActiveTab("videos")}
                    >
                        <FontAwesomeIcon icon={["far", "circle-play"]} />
                        <span className="hidden lg:inline-block ml-2">
                            Videos
                        </span>
                    </a>
                    <a
                        className={`${
                            activeTab === "saved"
                                ? "text-black border-t border-black"
                                : ""
                        } flex justify-center items-center h-full mr-16 cursor-pointer`}
                        onClick={() => setActiveTab("saved")}
                    >
                        <FontAwesomeIcon icon={["far", "bookmark"]} />
                        <span className="hidden lg:inline-block ml-2">
                            Saved
                        </span>
                    </a>
                    <a
                        className={`${
                            activeTab === "tagged"
                                ? "text-black border-t border-black"
                                : ""
                        } flex justify-center items-center h-full mr-16 cursor-pointer`}
                        onClick={() => setActiveTab("tagged")}
                    >
                        <FontAwesomeIcon icon="user-tag" />
                        <span className="hidden lg:inline-block ml-2">
                            Tagged
                        </span>
                    </a>
                </ul>

                <div className="grid grid-cols-3 gap-1 lg:gap-8">
                    {data.me.posts.map((post) => (
                        <ProfilePost
                            key={post.id}
                            showCurrentPost={() => showCurrentPost(post)}
                            image={post.image}
                        />
                    ))}
                </div>
            </main>
            <footer className="py-5 text-center">
                <ul className="flex flex-row space-x-4 p-2 text-xs items-center	justify-center space-x-10 text-gray-400">
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Privacy</a>
                    </li>
                    <li>
                        <a href="">Terms</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}
