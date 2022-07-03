import Post from "../components/Post";
import Suggestions from "../components/Suggestions";
import Stories from "../components/Stories";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";
import GET_FEED from "../graphql/GET_FEED";
import LOGOUT from "../graphql/LOGOUT";
import { useApolloClient } from "@apollo/client";
import { signOut } from "../Helpers";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home(props) {
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_FEED);
    const {
        loading: loadingCurrentUser,
        error: errorCurrentUser,
        data: dataCurrentUser,
    } = useQuery(GET_CURRENT_USER);

    const [logout] = useMutation(LOGOUT);
    const client = useApolloClient();

    if (loadingCurrentUser || loading) {
        return <Spinner />;
    }

    if (error || errorCurrentUser) {
        return "Error...";
    }

    return (
        <main className="bg-zinc-50 grid grid-cols-3">
            <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
                <Stories />
                {data.feed.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        id={post.id}
                        currentUserId={dataCurrentUser.me.id}
                        caption={post.caption}
                        image={post.image}
                        username={post.user.username}
                        userImage={post.user.image}
                        likes={post.likes}
                        created_time_ago={post.created_time_ago}
                        comments={post.comments}
                        postLikes={post.postLikes}
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
                                <Link to={`/${dataCurrentUser.me.username}`}>
                                    {dataCurrentUser.me.username}
                                </Link>
                            </div>
                            <div className="text-gray-500 text-sm leading-4">
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

                    <Suggestions />
                    <Footer />
                </div>
            </div>
        </main>
    );
}
