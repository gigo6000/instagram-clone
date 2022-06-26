import Follow from "./Follow";
import { useQuery } from "@apollo/client";
import GET_SUGGESTIONS from "../graphql/GET_SUGGESTIONS";

export default function Suggestions(props) {
    const { loading, error, data } = useQuery(GET_SUGGESTIONS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    return (
        <>
            <div className="flex flex-row pt-5">
                <div className="w-72 font-bold text-gray-500 text-sm">
                    Suggestions For You
                </div>
                <div className="w-32 text-sm text-right">
                    <a href="#" className="text-black-400 font-bold text-xs">
                        See All
                    </a>
                </div>
            </div>

            {data.suggestions.map((user) => {
                return (
                    <div key={user.id} className="flex py-2">
                        <div className="flex items-center">
                            <a className="inline-block align-top" href="#">
                                <img
                                    className="rounded-full"
                                    src={user.image}
                                    width="35"
                                />
                            </a>
                            <div className="inline-block ml-2">
                                <div className="text-sm font-medium">
                                    {user.username}
                                </div>
                                <div className="text-gray-500 text-xs">
                                    Suggested for you
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 items-center flex justify-end ">
                            <Follow user={user} />
                        </div>
                    </div>
                );
            })}
        </>
    );
}
