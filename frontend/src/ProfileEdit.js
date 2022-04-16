import { Fragment, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileEdit(props) {
    const [activeSection, setActiveSection] = useState("edit-profile");

    return (
        <div className="border flex flex-row bg-white min-h-[80vh]">
            <div className="w-1/4 border-r ">
                <ul>
                    <li>
                        <a
                            className={`block cursor-pointer p-4 px-8 ${
                                activeSection === "edit-profile"
                                    ? "font-bold border-l-2 border-l-black"
                                    : ""
                            }`}
                            onClick={() => setActiveSection("edit-profile")}
                        >
                            Edit Profile
                        </a>
                    </li>
                    <li>
                        <a
                            className={`block cursor-pointer p-4 px-8 ${
                                activeSection === "change-password"
                                    ? "font-bold border-l-2 border-l-black"
                                    : ""
                            }`}
                            onClick={() => setActiveSection("change-password")}
                        >
                            Change Password
                        </a>
                    </li>
                    <li>
                        <a className="block cursor-pointer p-5 px-8">
                            Push Notifications
                        </a>
                    </li>
                    <li>
                        <a className="block cursor-pointer p-5 px-8">Help</a>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 p-10">
                {activeSection === "edit-profile" && (
                    <>
                        <div className="flex flex-row">
                            <div className="w-1/3 p-3">
                                <a className="float-right mr-5" href="">
                                    <img
                                        className="rounded-full"
                                        src="/images/profile.jpeg"
                                        width="40"
                                    />
                                </a>
                            </div>
                            <div>
                                <h1 className="text-2xl">gigo6000</h1>
                                <a
                                    href="#"
                                    className="text-sm text-sky-500 font-bold"
                                >
                                    Change Profile Photo
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                                <label className="m-0 p-0 align-baseline font-bold flex align-center">
                                    Name
                                </label>
                            </div>
                            <div className="w-2/3 pr-10">
                                <input
                                    type="text"
                                    className="border p-1 px-3 w-full "
                                    placeholder="Name"
                                    value="Carlos Mafla | Dev"
                                />
                                <p className="text-gray-400 text-xs">
                                    Help people discover your account by using
                                    the name you're known by: either your full
                                    name, nickname, or business name.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                                <label className="m-0 p-0 align-baseline font-bold flex align-center">
                                    Username
                                </label>
                            </div>
                            <div className="w-2/3 pr-10">
                                <input
                                    type="text"
                                    className="border p-1 px-3 w-full"
                                    placeholder="Username"
                                    value="gigo6000"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                                <label className="m-0 p-0 align-baseline font-bold flex align-center">
                                    Website
                                </label>
                            </div>
                            <div className="w-2/3 pr-10">
                                <input
                                    type="text"
                                    className="border p-1 px-3 w-full"
                                    placeholder="https://www.mywebsite.com"
                                    value="https://carlosmafla.com"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                                <label className="m-0 p-0 align-baseline font-bold flex align-center">
                                    Bio
                                </label>
                            </div>
                            <div className="w-2/3 pr-10">
                                <textarea
                                    className="border p-1 px-3 w-full"
                                    rows="3"
                                    value="Full Stack Web Developer"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                                <label className="m-0 p-0 align-baseline font-bold flex align-center">
                                    Email
                                </label>
                            </div>
                            <div className="w-2/3 pr-10">
                                <input
                                    type="text"
                                    className="border p-1 px-3 w-full"
                                    placeholder="Email"
                                    value="gigo6000@hotmail.com"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                                <label className="m-0 p-0 align-baseline font-bold flex align-center">
                                    Phone Number
                                </label>
                            </div>
                            <div className="w-2/3 pr-10">
                                <input
                                    type="text"
                                    className="border p-1 px-3 w-full"
                                    placeholder="Phone Number"
                                    value=""
                                />
                            </div>
                        </div>{" "}
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8" />
                            <div className="w-2/3 pr-10">
                                <button
                                    onClick={props.goProfileEdit}
                                    className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm"
                                    type="submit"
                                >
                                    Submit
                                </button>{" "}
                            </div>
                        </div>
                    </>
                )}

                {activeSection === "change-password" && (
                    <>
                        <div className="flex flex-row">
                            <div className="w-1/3 p-3">
                                <a className="float-right mr-5" href="">
                                    <img
                                        className="rounded-full"
                                        src="/images/profile.jpeg"
                                        width="40"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-2xl">gigo6000</h1>
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                                <label className="m-0 p-0 align-baseline font-bold flex align-center">
                                    Password
                                </label>
                            </div>
                            <div className="w-2/3 pr-10">
                                <input
                                    type="text"
                                    className="border p-2 px-3 w-full bg-gray-100 rounded"
                                    placeholder="Password"
                                    value=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                                <label className="m-0 p-0 align-baseline font-bold flex align-center">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="w-2/3 pr-10">
                                <input
                                    type="text"
                                    className="border p-2 px-3 w-full bg-gray-100 rounded"
                                    placeholder="Confirm"
                                    value=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-row mt-5 items-center">
                            <div className="w-1/3 flex flex-row place-content-end align-center pr-8" />
                            <div className="w-2/3 pr-10 mt-3">
                                <button
                                    onClick={props.goProfileEdit}
                                    className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm"
                                    type="submit"
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
