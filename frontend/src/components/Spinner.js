import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Spinner() {
    return (
        <FontAwesomeIcon
            className="fa-spin text-gray-400 text-2xl m-3"
            icon={["fas", "spinner"]}
        />
    );
}
