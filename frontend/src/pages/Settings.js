import { Link, Outlet, useLocation } from "react-router-dom";

export default function Settings(props) {
    const location = useLocation();
    const { pathname } = location;

    return (
        <div className="border flex flex-row bg-white min-h-[80vh]">
            <div className="w-1/4 border-r ">
                <ul>
                    <li>
                        <Link
                            className={`block cursor-pointer p-4 px-8 ${
                                pathname === "/accounts/edit"
                                    ? "font-bold border-l-2 border-l-black"
                                    : ""
                            }`}
                            to="edit"
                        >
                            Edit Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`block cursor-pointer p-4 px-8 ${
                                pathname === "/accounts/password"
                                    ? "font-bold border-l-2 border-l-black"
                                    : ""
                            }`}
                            to="password"
                        >
                            Change Password
                        </Link>
                    </li>
                    <li>
                        <a className="block cursor-pointer p-5 px-8">Help</a>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 p-10">
                <Outlet />
            </div>
        </div>
    );
}
