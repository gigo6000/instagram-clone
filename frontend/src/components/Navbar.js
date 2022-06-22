import React, { useState, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import Modal from "../Modal";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";
import LOGOUT from "../graphql/LOGOUT";
import UPLOAD_FILE from "../graphql/UPLOAD_FILE";
import { signOut } from "../Helpers";
import { useApolloClient } from "@apollo/client";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
    const { setIsSettingsModalOpen } = props;
    const [caption, setCaption] = useState("");
    const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        setFiles(
            acceptedFiles.map((file) =>
                Object.assign(file, { preview: URL.createObjectURL(file) })
            )
        );
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    const [files, setFiles] = useState([]);
    const { loading: loadingUser, error, data } = useQuery(GET_CURRENT_USER);
    const [logout] = useMutation(LOGOUT);
    const client = useApolloClient();
    const [uploadFile] = useMutation(UPLOAD_FILE, {
        onCompleted: (data) => console.log(data),
    });
    const navigate = useNavigate();

    if (loadingUser) {
        return <div>loading...</div>;
    }

    const openNewPostModal = () => {
        setFiles([]);
        setIsNewPostModalOpen(true);
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };

    const share = () => {
        uploadFile({
            variables: {
                user_id: data.me.id,
                caption: caption,
                file: files[0],
            },
            refetchQueries: [{ query: GET_CURRENT_USER }],
        });
        setIsNewPostModalOpen(false);
        navigate(`/${data.me.username}`);
    };

    const showCreatePost = () => {
        if (files.length === 0) {
            return;
        }

        return (
            <div className="flex">
                <div className="w-3/4 overflow-hidden border-r">
                    <div className="flex justify-center items-center h-[50rem] ">
                        <img
                            src={files[0].preview}
                            key={files[0].name}
                            className="h-[60rem] max-w-none"
                        />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="p-3 border-b">
                        <a href="" className="">
                            <img
                                className="rounded-full w-8 max-w-none inline"
                                src={data.me.image}
                            />{" "}
                            <span className="font-medium text-sm ml-2">
                                {data.me.name}
                            </span>
                        </a>
                        <textarea
                            type="text"
                            className="p-1 px-0 mt-3 w-full outline-0 h-40"
                            placeholder="Write a caption..."
                            onChange={handleCaptionChange}
                            value={caption}
                        />
                        <div className="flex">
                            <div className="w-3/6">
                                <FontAwesomeIcon
                                    className="text-gray-400 text-lg"
                                    icon={["far", "face-smile"]}
                                />
                            </div>
                            <div className="w-3/6 text-right">
                                <span className="text-gray-200 text-sm">
                                    {" "}
                                    0/200
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const isFileDropped = () => {
        return files.length !== 0;
    };

    return (
        <>
            <Modal
                title="Create new post"
                open={isNewPostModalOpen}
                setOpen={setIsNewPostModalOpen}
                size={isFileDropped() ? "lg" : "md"}
                share={share}
                isFileDropped={isFileDropped}
            >
                {!isFileDropped() ? (
                    <div
                        {...getRootProps()}
                        className="flex flex-col items-center justify-center h-full"
                    >
                        <input {...getInputProps()} />
                        <FontAwesomeIcon
                            icon={"photo-film"}
                            className={`text-7xl ${
                                isDragActive ? "text-sky-500" : ""
                            }`}
                        />
                        <h2 className="py-3 text-2xl font-light">
                            {" "}
                            Drag photos and videos here
                        </h2>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                            Select from computer
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col h-full">
                        {showCreatePost()}
                    </div>
                )}
            </Modal>
            <nav className="sticky top-0 min-h-fit bg-white w-full border border-b-1 z-50">
                <div className="container max-w-5xl">
                    <div className="flex flex-row py-1 items-center">
                        <div className="basis-1/2 pl-3 lg:p-0">
                            <Link to="/">
                                <img
                                    className=""
                                    src="images/logo.svg"
                                    width="120"
                                />
                            </Link>
                        </div>
                        <div className="basis-1/2 hidden md:block">
                            <div className="relative">
                                <FontAwesomeIcon
                                    icon="magnifying-glass"
                                    className="absolute left-3 top-3 text-gray-300"
                                />
                                <input
                                    id="search"
                                    className="p-2 bg-gray-100 rounded-lg w-80 pl-10 align-middle placeholder:font-light"
                                    placeholder="Search"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <ul className="flex flex-row space-x-4 p-2 text-2xl space-x-6 justify-end">
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon="house" />
                                    </Link>
                                </li>
                                <li>
                                    <a href="">
                                        <FontAwesomeIcon
                                            icon={["far", "comment-dots"]}
                                        />
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => openNewPostModal()}
                                    >
                                        <FontAwesomeIcon
                                            icon={["far", "square-plus"]}
                                        />
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a className="cursor-pointer">
                                        <FontAwesomeIcon
                                            icon={["far", "compass"]}
                                        />
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a className="cursor-pointer">
                                        <FontAwesomeIcon
                                            icon={["far", "heart"]}
                                        />
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <Menu
                                        as="div"
                                        className="relative inline-block text-left"
                                    >
                                        <div>
                                            <Menu.Button className="inline-block w-8 h-8 justify-center bg-white text-sm font-medium text-gray-700">
                                                <img
                                                    className="rounded-full"
                                                    src={data.me.image}
                                                    width="24"
                                                />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={`/${data.me.username}`}
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon="fa-solid fa-user"
                                                                    className="mr-3"
                                                                />
                                                                Profile
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm cursor-pointer"
                                                                )}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon="fa-solid fa-bookmark"
                                                                    className="mr-3"
                                                                />
                                                                Saved
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm cursor-pointer"
                                                                )}
                                                                onClick={() =>
                                                                    setIsSettingsModalOpen(
                                                                        true
                                                                    )
                                                                }
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon="fa-solid fa-gear"
                                                                    className="mr-3"
                                                                />
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block w-full text-left px-4 py-2 text-sm cursor-pointer"
                                                                )}
                                                                onClick={() =>
                                                                    signOut(
                                                                        client,
                                                                        navigate,
                                                                        logout
                                                                    )
                                                                }
                                                            >
                                                                Log Out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
