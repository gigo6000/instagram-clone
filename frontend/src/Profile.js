import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPost from "./ModalPost";
import ProfilePost from "./ProfilePost";
import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        caption:
            '"People don\'t care about what you say, they care about what you build." - Mark Zuckerberg"',
        image: "images/post.jpeg",
        username: "gigo6000",
        user_image: "/images/profile.jpeg",
        is_liked: false,
        is_bookmarked: false,
        likes: "1,000",
        date: "1 DAY AGO",
        comments: [
            {
                id: 1,
                comment: "Nice setup ! 🔥",
                is_liked: true,
                username: "carlos_codes",
                user_image: "/images/profile5.jpg",
            },
            {
                id: 2,
                comment: "Wake up Neo, the Matrix has you! 😎",
                is_liked: true,
                username: "carlos_codes",
                user_image: "/images/profile5.jpg",
            },
            {
                id: 3,
                comment:
                    "Bacon ipsum dolor amet ribeye shank meatloaf leberkas frankfurter. Boudin jowl ham hock bresaola filet mignon, prosciutto fatback pancetta brisket ground round salami. Chislic tail flank, rump cow boudin tenderloin frankfurter. Pork belly sausage ham hock, tail ground round spare ribs short ribs picanha pastrami biltong frankfurter boudin leberkas cupim.",
                is_liked: true,
                username: "maria_codes",
                user_image: "/images/profile6.jpg",
            },
            {
                id: 4,
                comment:
                    "Bacon ipsum dolor amet ribeye shank meatloaf leberkas frankfurter. Boudin jowl ham hock bresaola filet mignon, prosciutto fatback pancetta brisket ground round salami. Chislic tail flank, rump cow boudin tenderloin frankfurter. Pork belly sausage ham hock, tail ground round spare ribs short ribs picanha pastrami biltong frankfurter boudin leberkas cupim.",
                is_liked: true,
                username: "me_codes",
                user_image: "/images/profile7.jpg",
            },
            {
                id: 5,
                comment:
                    "Bacon ipsum dolor amet ribeye shank meatloaf leberkas frankfurter. Boudin jowl ham hock bresaola filet mignon, prosciutto fatback pancetta brisket ground round salami. Chislic tail flank, rump cow boudin tenderloin frankfurter. Pork belly sausage ham hock, tail ground round spare ribs short ribs picanha pastrami biltong frankfurter boudin leberkas cupim.",
                is_liked: true,
                username: "carlos_codes",
                user_image: "/images/profile8.jpg",
            },
            {
                id: 6,
                comment:
                    "Bacon ipsum dolor amet ribeye shank meatloaf leberkas frankfurter. Boudin jowl ham hock bresaola filet mignon, prosciutto fatback pancetta brisket ground round salami. Chislic tail flank, rump cow boudin tenderloin frankfurter. Pork belly sausage ham hock, tail ground round spare ribs short ribs picanha pastrami biltong frankfurter boudin leberkas cupim.",
                is_liked: true,
                username: "carlos_codes",
                user_image: "/images/profile9.jpg",
            },
        ],
    },
    {
        id: 2,
        caption:
            "I don't care if it works on your machine! We are not shipping your machine!\" - Vidiu Platon ",
        image: "images/post2.jpeg",
        username: "gigo6000",
        user_image: "/images/profile.jpeg",
        is_liked: false,
        is_bookmarked: false,
        likes: "3,000",
        date: "23 HOURS AGO",
    },
    {
        id: 3,
        caption:
            "I don't care if it works on your machine! We are not shipping your machine!\" - Vidiu Platon ",
        image: "images/post3.jpeg",
        username: "gigo6000",
        user_image: "/images/profile.jpeg",
        is_liked: false,
        is_bookmarked: false,
        likes: "5,500",
        date: "23 HOURS AGO",
    },
    {
        id: 4,
        caption:
            '"People don\'t care about what you say, they care about what you build." - Mark Zuckerberg"',
        image: "images/post4.jpeg",
        username: "gigo6000",
        user_image: "/images/profile.jpeg",
        is_liked: true,
        is_bookmarked: false,
        likes: "1,000",
        date: "1 DAY AGO",
    },
    {
        id: 5,
        caption:
            "I don't care if it works on your machine! We are not shipping your machine!\" - Vidiu Platon ",
        image: "images/post5.jpeg",
        username: "gigo6000",
        user_image: "/images/profile.jpeg",
        is_liked: false,
        is_bookmarked: false,
        likes: "3,000",
        date: "23 HOURS AGO",
    },
    {
        id: 6,
        caption:
            "I don't care if it works on your machine! We are not shipping your machine!\" - Vidiu Platon ",
        image: "images/post6.jpeg",
        username: "gigo6000",
        user_image: "/images/profile.jpeg",
        is_liked: false,
        is_bookmarked: false,
        likes: "5,500",
        date: "23 HOURS AGO",
    },
];

export default function Profile(props) {
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("posts");
    const [currentPost, setCurrentPost] = useState(null);

    const showCurrentPost = (post) => {
        setCurrentPost(post);
        setPostModalOpen(true);
    };

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
                            src="images/profile.jpeg"
                            width="150"
                        />
                    </div>
                    <div className="bg-green p-3 rounded text-gray-600 col-span-2">
                        <div className="flex items-center">
                            <h1 className="inline-block text-3xl align-bottom block">
                                gigo6000
                            </h1>{" "}
                            <Link
                                as="button"
                                to="/accounts/edit"
                                className="bg-white ml-3  text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded text-sm"
                            >
                                Edit Profile
                            </Link>{" "}
                            <a
                                href="#"
                                className="ml-3"
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
                                <strong>107</strong> posts
                            </div>
                            <div className="basis-1/2">
                                <strong>1,459</strong> followers
                            </div>
                            <div className="basis-1/2">
                                <strong>125</strong> following
                            </div>
                        </div>
                        <h3 className="font-bold">Carlos Mafla | Web Dev</h3>
                        <p>&gt; Full Stack Web Developer 💻 </p>
                        <p>&gt; 15+ years of experience 🚀 </p>
                        <p>&gt; Helping devs learn new skills 🖥 💸 </p>
                        <p>
                            &gt; JavaScript/React/Symfony/Laravel/Spanglish 🇨🇴🇺🇸
                        </p>
                        <a
                            href="https://carlosmafla.com"
                            target="_blank"
                            className="text-blue-900 font-bold"
                        >
                            carlosmafla.com
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
                                    {" "}
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
                        <b className="text-black block">107</b> posts
                    </li>
                    <li className="flex-1 text-center">
                        <b className="text-black block">1,460</b> followers
                    </li>
                    <li className="flex-1 text-center">
                        <b className="text-black block">125</b> following
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
                    {posts.map((post) => (
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
                        {" "}
                        <a href="">About</a>
                    </li>
                    <li>
                        {" "}
                        <a href="">Privacy</a>
                    </li>
                    <li>
                        {" "}
                        <a href="">Terms</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}
