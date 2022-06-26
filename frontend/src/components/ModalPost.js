import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import { getImageUrl } from "../Helpers";

export default function ModalPost(props) {
    return (
        props.post && (
            <Modal open={props.open} setOpen={props.setOpen} size="lg">
                <div className="flex flex-row h-full">
                    <div className="w-3/5">
                        <img src={getImageUrl(props.post.image)} className="" />
                    </div>

                    <div className="w-2/5 relative pt-16">
                        <div className="absolute top-0 w-full p-3 flex flex-row border-b">
                            <div className="flex-1">
                                <a href="" className="">
                                    <img
                                        className="rounded-full w-8 max-w-none inline"
                                        src={props.post.user.image}
                                    />{" "}
                                    <span className="font-medium text-sm ml-2">
                                        {props.post.user.username}
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
                                        src={props.post.user.image}
                                    />
                                </div>
                                <div className="">
                                    <div className="px-3 text-sm">
                                        <span className="font-medium mr-2">
                                            {props.post.user.username}
                                        </span>
                                        {props.post.caption}
                                    </div>
                                </div>
                            </div>

                            {props.post.comments &&
                                props.post.comments.map((comment, index) => (
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
                                        href="#"
                                        className={`mr-3 ${
                                            props.post.is_liked
                                                ? "text-red-600"
                                                : ""
                                        }`}
                                    >
                                        <FontAwesomeIcon
                                            icon={[
                                                props.post.is_liked
                                                    ? "fas"
                                                    : "far",
                                                "heart",
                                            ]}
                                        />
                                    </a>
                                    <a href="#" className="mr-3">
                                        <FontAwesomeIcon
                                            icon={["far", "comment"]}
                                        />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon
                                            icon={["far", "paper-plane"]}
                                        />
                                    </a>
                                </div>
                                <div className="">
                                    <a href="#" className="">
                                        <FontAwesomeIcon
                                            icon={["far", "bookmark"]}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="font-medium text-sm px-3">
                                {props.post.likes} likes
                            </div>
                            <div className="text-gray-500 uppercase px-3 text-xs tracking-wide my-3">
                                {props.post.date}
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
