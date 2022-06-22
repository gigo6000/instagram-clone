import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation, useQuery } from "@apollo/client";
import FOLLOW from "../graphql/FOLLOW";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";

export default function Follow(props) {
    const [loading, setLoading] = useState(false);
    const [following, setFollowing] = useState(false);
    const { user } = props;
    const [follow] = useMutation(FOLLOW);
    const { loading: loadingUser, error, data } = useQuery(GET_CURRENT_USER);

    if (loadingUser) {
        return <div>loading...</div>;
    }

    const followUser = async () => {
        setLoading(true);

        try {
            const response = await follow({
                variables: { user_id: user.id, follower_id: data.me.id },
            });

            setLoading(false);
            if (response.data.follow) {
                setFollowing(true);
            }
        } catch (error) {
            console.log("error:", error);
        }
    };

    return (
        <>
            <FontAwesomeIcon
                className={`fa-spin text-gray-400 text-lg ${
                    loading ? "" : "hidden"
                }`}
                icon={["fas", "spinner"]}
            />

            {!loading && !following && (
                <a
                    onClick={() => followUser()}
                    className="text-xs text-sky-500 font-bold cursor-pointer"
                >
                    Follow
                </a>
            )}

            {!loading && following && (
                <div className="text-xs  font-bold">Following</div>
            )}
        </>
    );
}
