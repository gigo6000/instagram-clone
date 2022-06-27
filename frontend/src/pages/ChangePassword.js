import { useQuery } from "@apollo/client";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";
import Spinner from "../components/Spinner";

export default function ChangePassword() {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return "Error...";
    }
    return (
        <>
            <div className="flex flex-row">
                <div className="w-1/3 p-3">
                    <a className="float-right mr-5" href="">
                        <img
                            className="rounded-full"
                            src={data.me.image}
                            width="40"
                        />
                    </a>
                </div>
                <div className="flex items-center">
                    <h1 className="text-2xl">{data.me.username}</h1>
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
                    />
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8" />
                <div className="w-2/3 pr-10 mt-3">
                    <button
                        className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm"
                        type="submit"
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </>
    );
}
