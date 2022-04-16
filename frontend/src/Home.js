import React, { useState } from "react";
import Post from "./Post";
import Suggestions from "./Suggestions";
import Stories from "./Stories";

const posts = [
    {
        id: 1,
        caption:
            '"People don\'t care about what you say, they care about what you build." - Mark Zuckerberg"',
        image: "images/post.jpeg",
        username: "carlos_codes",
        user_image: "/images/profile5.jpg",
        is_liked: true,
        is_bookmarked: false,
        likes: "1,000",
        date: "1 DAY AGO",
        comments: [
            {
                id: 1,
                comment: "Nice setup ! 🔥",
                is_liked: true,
            },
            {
                id: 1,
                comment: "Wake up Neo, the Matrix has you! 😎",
                is_liked: true,
            },
        ],
    },
    {
        id: 2,
        caption:
            "I don't care if it works on your machine! We are not shipping your machine!\" - Vidiu Platon ",
        image: "images/post2.jpeg",
        username: "maria_codes",
        user_image: "/images/profile6.jpg",
        is_liked: false,
        is_bookmarked: false,
        likes: "3,000",
        date: "23 HOURS AGO",
        comments: [
            {
                id: 1,
                comment: "Random spam",
            },
        ],
    },
    {
        id: 3,
        caption:
            "I don't care if it works on your machine! We are not shipping your machine!\" - Vidiu Platon ",
        image: "images/post3.jpeg",
        username: "me_codes",
        user_image: "/images/profile3.jpg",
        is_liked: false,
        is_bookmarked: false,
        likes: "5,500",
        date: "23 HOURS AGO",
    },
];

export default function Home(props) {
    return (
        <main className="bg-zinc-50 grid grid-cols-3">
            <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
                <Stories />
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        isLiked={post.is_liked}
                        caption={post.caption}
                        image={post.image}
                        username={post.username}
                        userImage={post.user_image}
                        likes={post.likes}
                        date={post.date}
                        comments={post.comments}
                    />
                ))}
            </div>
            <div className="col-span-1 hidden lg:block">
                <div className="fixed p-5 w-80">
                    <div className="flex flex-row">
                        <a href="">
                            <img
                                className="rounded-full"
                                src="images/profile.jpeg"
                                width="100"
                            />
                        </a>
                        <div className="w-72 pl-2 m-auto">
                            <div className="text-sm font-medium">gigo6000</div>
                            <div className="text-gray-500 text-sm ">
                                Carlos Mafla | Web Dev
                            </div>
                        </div>
                        <div className="w-32 text-right m-auto">
                            <a
                                href="#"
                                className="text-xs text-sky-500 font-bold"
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>

                    <Suggestions />

                    <footer className="py-5">
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
                </div>
            </div>
        </main>
    );
}
