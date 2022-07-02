import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import { getImageUrl, isLikedByUser } from "../Helpers";

export default function ModalPost(props) {
    const { post, open, setOpen, currentUserId } = props;

    return (
        post && (
            <Modal open={open} setOpen={setOpen} size="lg">
                <div className="flex flex-row h-full">
                    <div className="w-3/5">
                        <img src={getImageUrl(post.image)} className="" />
                    </div>

                    <div className="w-2/5 relative pt-16">
                        <div className="absolute top-0 w-full p-3 flex flex-row border-b">
                            <div className="flex-1">
                                <a href="" className="">
                                    <img
                                        className="rounded-full w-8 max-w-none inline"
                                        src={post.user.image}
                                    />{" "}
                                    <span className="font-medium text-sm ml-2">
                                        {post.user.username}
                                    </span>
                                </a>
                            </div>
                            <div className="">
                                <a className="" className="" href="">
                                    <FontAwesomeIcon icon="ellipsis" />
                                </a>
                            </div>
                        </div>

                        <div className="overflow-scroll h-full pb-48">
                            <div className="flex flex-row p-3">
                                <div>
                                    <img
                                        className="rounded-full w-8 inline max-w-none"
                                        src={post.user.image}
                                    />
                                </div>
                                <div className="">
                                    <div className="px-3 text-sm">
                                        <span className="font-medium mr-2">
                                            {post.user.username}
                                        </span>
                                        {post.caption}
                                    </div>
                                </div>
                            </div>

                            {post.comments &&
                                post.comments.map((comment, index) => (
                                    <div
                                        className="flex flex-row p-3"
                                        key={comment.id}
                                    >
                                        <div className="">
                                            <img
                                                className="rounded-full w-8 inline max-w-none"
                                                src={comment.user.image}
                                            />
                                        </div>
                                        <div className="grow relative">
                                            <div className="px-4 text-sm">
                                                <span className="font-medium mr-2">
                                                    {comment.user.username}
                                                </span>
                                                {comment.comment}
                                            </div>
                                            <a
                                                className={`absolute top-0 right-0 block float-right text-xs cursor-pointer ${
                                                    comment.is_liked
                                                        ? "text-red-600"
                                                        : ""
                                                }`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={[
                                                        comment.is_liked
                                                            ? "fas"
                                                            : "far",
                                                        "heart",
                                                    ]}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div className="absolute bottom-0 w-full border-t bg-white">
                            <div className="header p-3 flex flex-row text-2xl w-full">
                                <div className="flex-1 ">
                                    <a
                                        className={`mr-3 cursor-pointer ${
                                            isLikedByUser(
                                                currentUserId,
                                                post.postLikes
                                            )
                                                ? "text-red-600"
                                                : ""
                                        }`}
                                    >
                                        <FontAwesomeIcon
                                            icon={[
                                                isLikedByUser(
                                                    currentUserId,
                                                    post.postLikes
                                                )
                                                    ? "fas"
                                                    : "far",
                                                "heart",
                                            ]}
                                        />
                                    </a>
                                    <a className="mr-3 cursor-pointer">
                                        <FontAwesomeIcon
                                            icon={["far", "comment"]}
                                        />
                                    </a>
                                    <a className="cursor-pointer">
                                        <FontAwesomeIcon
                                            icon={["far", "paper-plane"]}
                                        />
                                    </a>
                                </div>
                                <div className="">
                                    <a className="cursor-pointer">
                                        <FontAwesomeIcon
                                            icon={["far", "bookmark"]}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="font-medium text-sm px-3">
                                {post.likes} likes
                            </div>
                            <div className="text-gray-500 uppercase px-3 text-xs tracking-wide my-3">
                                {post.date}
                            </div>

                            <div className="p-3 flex flex-row border-t">
                                <div className="flex items-center">
                                    <a className="text-2xl" href="#">
                                        <FontAwesomeIcon
                                            icon={["far", "face-smile"]}
                                        />
                                    </a>
                                </div>
                                <div className="flex-1 pr-3 py-1">
                                    <input
                                        className="w-full px-3 py-1 text-sm outline-0"
                                        type="text"
                                        placeholder="Add a comment..."
                                    />
                                </div>
                                <div className="flex items-center text-sm">
                                    <a
                                        className="text-sky-500 font-medium"
                                        href="#"
                                    >
                                        Post
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    );
}
