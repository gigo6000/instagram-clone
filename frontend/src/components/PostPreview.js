import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostPreview(props) {
    const { files, user, caption, handleCaptionChange } = props;

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
                            src={user.image}
                        />{" "}
                        <span className="font-medium text-sm ml-2">
                            {user.name}
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
                            <span className="text-gray-200 text-sm">0/200</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
