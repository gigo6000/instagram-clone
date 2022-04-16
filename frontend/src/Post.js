import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPostActions from "./ModalPostActions";

function Post(props) {
    const [isLiked, setIsLiked] = useState(props.isLiked ?? false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        image,
        caption,
        username,
        userImage,
        likes,
        date,
        comments,
    } = props;

    return (
        <>
            <ModalPostActions open={isModalOpen} setOpen={setIsModalOpen} />
            <div className="border border-slate-200 mb-5">
                <div className="p-3 flex flex-row">
                    <div className="flex-1">
                        <a href="" className="">
                            <img
                                className="rounded-full w-8 max-w-none inline"
                                src={userImage}
                            />{" "}
                            <span className="font-medium text-sm ml-2">
                                {username}
                            </span>
                        </a>
                    </div>
                    <div className="">
                        <a
                            className=""
                            href="#"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <FontAwesomeIcon icon="ellipsis" />
                        </a>
                    </div>
                </div>
                <img
                    className="w-100"
                    alt={`Photo by ${username}`}
                    src={image}
                />

                <div className="header p-3 flex flex-row text-2xl">
                    <div className="flex-1 ">
                        <a
                            className={`mr-3 cursor-pointer ${
                                isLiked ? "text-red-600" : ""
                            }`}
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            <FontAwesomeIcon
                                icon={[isLiked ? "fas" : "far", "heart"]}
                            />
                        </a>
                        <a href="#" className="mr-3">
                            <FontAwesomeIcon icon={["far", "comment"]} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={["far", "paper-plane"]} />
                        </a>
                    </div>
                    <div className="">
                        <a
                            className="cursor-pointer"
                            onClick={() => setIsBookmarked(!isBookmarked)}
                        >
                            <FontAwesomeIcon
                                icon={[
                                    isBookmarked ? "fas" : "far",
                                    "bookmark",
                                ]}
                            />
                        </a>
                    </div>
                </div>
                <div className="font-medium text-sm px-3">{likes} likes</div>
                <div className="px-3 text-sm">
                    <span className="font-medium">{username}</span> {caption}
                </div>

                {comments && (
                    <a
                        href="#"
                        className="block text-gray-500 px-3 py-2 text-sm"
                    >
                        View all 4 comments
                    </a>
                )}

                {comments &&
                    comments.map((comment, index) => (
                        <div
                            className={`px-3 ${
                                index !== 0 ? "pt-2" : ""
                            } text-sm`}
                        >
                            <span className="font-medium">gigo6000</span>{" "}
                            {comment.comment}
                            <a
                                className={`block float-right text-xs cursor-pointer ${
                                    comment.is_liked ? "text-red-600" : ""
                                }`}
                            >
                                <FontAwesomeIcon
                                    icon={[
                                        comment.is_liked ? "fas" : "far",
                                        "heart",
                                    ]}
                                />
                            </a>
                        </div>
                    ))}

                <div className="text-gray-500 uppercase px-3 pt-2 pb-5 text-[0.65rem] tracking-wide">
                    {date}
                </div>

                <div className="px-3 py-2 flex flex-row border-t">
                    <div className="flex items-center">
                        <a className="text-2xl" href="#">
                            <FontAwesomeIcon icon={["far", "face-smile"]} />
                        </a>
                    </div>
                    <div className="flex-1 pr-3 py-1">
                        <input
                            className="w-full px-3 py-1 text-sm bg-slate-50 outline-0"
                            type="text"
                            placeholder="Add a comment..."
                        />
                    </div>
                    <div className="flex items-center text-sm">
                        <a className="text-sky-500 font-medium" href="#">
                            Post
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
