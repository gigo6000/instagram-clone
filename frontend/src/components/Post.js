import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPostActions from "./ModalPostActions";
import { useMutation } from "@apollo/client";
import LIKE from "../graphql/LIKE";
import UNLIKE from "../graphql/UNLIKE";
import GET_FEED from "../graphql/GET_FEED";
import ADD_COMMENT from "../graphql/ADD_COMMENT";
import { getImageUrl, isLikedByUser } from "../Helpers";
import ModalPost from "../components/ModalPost";

const MAX_COMMENTS = 3;

function Post(props) {
    const {
        id,
        currentUserId,
        image,
        caption,
        username,
        userImage,
        likes,
        created_time_ago,
        comments,
        postLikes,
        post,
    } = props;

    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [like] = useMutation(LIKE);
    const [unlike] = useMutation(UNLIKE);
    const [addComment] = useMutation(ADD_COMMENT);

    const likePost = async (id) => {
        try {
            await like({
                variables: { post_id: id },
                refetchQueries: [
                    {
                        query: GET_FEED,
                    },
                ],
            });
        } catch (error) {
            console.log("error:", error);
        }
    };

    const unlikePost = async (id) => {
        try {
            await unlike({
                variables: { post_id: id },
                refetchQueries: [
                    {
                        query: GET_FEED,
                    },
                ],
            });
        } catch (error) {
            console.log("error:", error);
        }
    };

    const createComment = async () => {
        if (!comment) {
            return;
        }

        setLoading(true);

        try {
            await addComment({
                variables: { post_id: id, comment },
                refetchQueries: [
                    {
                        query: GET_FEED,
                    },
                ],
            });

            setLoading(false);
            setComment("");
        } catch (error) {
            console.log("error:", error);
        }
    };

    return (
        <>
            <ModalPost
                open={isPostModalOpen}
                setOpen={setPostModalOpen}
                post={post}
                currentUserId={currentUserId}
            />
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
                    src={getImageUrl(image)}
                />

                <div className="header p-3 flex flex-row text-2xl">
                    <div className="flex-1 ">
                        <a
                            className={`mr-3 cursor-pointer  ${
                                isLikedByUser(currentUserId, postLikes)
                                    ? "text-red-600"
                                    : "hover:text-gray-500"
                            }`}
                            onClick={() =>
                                isLikedByUser(currentUserId, postLikes)
                                    ? unlikePost(id)
                                    : likePost(id)
                            }
                        >
                            <FontAwesomeIcon
                                icon={[
                                    isLikedByUser(currentUserId, postLikes)
                                        ? "fas"
                                        : "far",
                                    "heart",
                                ]}
                            />
                        </a>
                        <a
                            className="mr-3 hover:text-gray-500 cursor-pointer"
                            onClick={() => setPostModalOpen(true)}
                        >
                            <FontAwesomeIcon icon={["far", "comment"]} />
                        </a>
                        <a className="hover:text-gray-500 cursor-pointer">
                            <FontAwesomeIcon icon={["far", "paper-plane"]} />
                        </a>
                    </div>
                    <div className="">
                        <a
                            className="cursor-pointer hover:text-gray-500"
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
                {comments.length && comments.length > MAX_COMMENTS ? (
                    <a
                        className="block text-gray-500 px-3 py-2 text-sm cursor-pointer"
                        onClick={() => setPostModalOpen(true)}
                    >
                        View all {comments.length} comments
                    </a>
                ) : (
                    ""
                )}

                {comments.length
                    ? comments
                          .slice(MAX_COMMENTS * -1)
                          .map((comment, index) => (
                              <div
                                  key={comment.id}
                                  className={`px-3 ${
                                      index !== 0 ? "pt-2" : ""
                                  } text-sm`}
                              >
                                  <span className="font-medium">
                                      {comment.user.username}
                                  </span>{" "}
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
                          ))
                    : ""}

                <div className="text-gray-500 uppercase px-3 pt-2 pb-5 text-[0.65rem] tracking-wide">
                    {created_time_ago}
                </div>

                <div className="px-3 py-2 flex flex-row border-t relative">
                    <div
                        className={`absolute top-0 left-0 h-full w-full text-center pt-3 ${
                            loading ? "block" : "hidden"
                        }`}
                    >
                        <FontAwesomeIcon
                            className={`fa-spin text-gray-400 text-2xl`}
                            icon={["fas", "spinner"]}
                        />
                    </div>
                    <div className="flex items-center">
                        <a className="text-2xl cursor-pointer">
                            <FontAwesomeIcon icon={["far", "face-smile"]} />
                        </a>
                    </div>
                    <div className="flex-1 pr-3 py-1">
                        <input
                            className={`w-full px-3 py-1 text-sm bg-slate-50 outline-0`}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            type="text"
                            placeholder="Add a comment..."
                            disabled={loading}
                        />
                    </div>
                    <div className="flex items-center text-sm">
                        <a
                            className={` font-medium ${
                                comment
                                    ? "cursor-pointer text-sky-500"
                                    : "text-sky-200"
                            }`}
                            onClick={() => createComment()}
                        >
                            Post
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
