import Post from "../components/Post";
import Suggestions from "../components/Suggestions";
import Stories from "../components/Stories";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";
import GET_FEED from "../graphql/GET_FEED";
import LOGOUT from "../graphql/LOGOUT";
import { useApolloClient } from "@apollo/client";
import { signOut } from "../Helpers";

export default function Home(props) {
    const navigate = useNavigate();
    const {
        loading: loadingCurrentUser,
        error: errorCurrentUser,
        data: dataCurrentUser,
    } = useQuery(GET_CURRENT_USER);

    const userId = dataCurrentUser?.me?.id;
    const { loading, error, data } = useQuery(GET_FEED, {
        skip: !userId,
        variables: { user_id: userId },
    });

    const [logout] = useMutation(LOGOUT);
    const client = useApolloClient();

    if (loadingCurrentUser || loading) {
        return "Loading...";
    }

    return (
        <main className="bg-zinc-50 grid grid-cols-3">
            <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
                <Stories />
                {data.feed.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        caption={post.caption}
                        image={post.image}
                        username={post.user.username}
                        userImage={post.user.image}
                        likes={post.likes}
                        created_time_ago={post.created_time_ago}
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
                                src={dataCurrentUser.me.image}
                                width="100"
                            />
                        </a>
                        <div className="w-72 pl-2 m-auto">
                            <div className="text-sm font-medium">
                                {dataCurrentUser.me.username}
                            </div>
                            <div className="text-gray-500 text-sm ">
                                {dataCurrentUser.me.name}
                            </div>
                        </div>
                        <div className="w-32 text-right m-auto">
                            <a
                                className="text-xs text-sky-500 font-bold cursor-pointer"
                                onClick={() =>
                                    signOut(client, navigate, logout)
                                }
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>

                    <Suggestions user_id={dataCurrentUser.me.id} />

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
