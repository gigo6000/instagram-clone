import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal(props) {
    const { open, setOpen } = props;

    const cancelButtonRef = useRef(null);

    const getSizeClasses = (size) => {
        let utilities = "";
        switch (size) {
            case "xs":
                utilities = "h-fit sm:max-w-md";
                break;
            case "lg":
                utilities = "h-5/6 max-h-[52rem] sm:max-w-6xl";
                break;
            default:
                utilities = "h-4/5 sm:max-w-screen-md";
                break;
        }

        return utilities;
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 flex items-center justify-center inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Dialog.Overlay className="fixed inset-0 bg-neutral-800 bg-opacity-95 transition-opacity" />

                <a
                    href="#"
                    className={`absolute right-6 top-4 text-white text-2xl`}
                    onClick={() => setOpen(false)}
                >
                    <FontAwesomeIcon icon={"x"} />
                </a>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-100"
                    enterFrom="opacity-0 sm:scale-150"
                    enterTo="opacity-100 sm:scale-100"
                >
                    <div
                        className={`flex items-center justify-center ${
                            props.title ? "pt-10" : ""
                        } ${getSizeClasses(props.size)} bg-white ${
                            props.size === "lg"
                                ? "rounded-md rounded-l-none"
                                : "rounded-lg"
                        }  overflow-hidden shadow-xl transform transition-all align-middle sm:w-full`}
                    >
                        {props.title && (
                            <div className="absolute top-0 w-full text-center border-b py-2 font-semibold">
                                <Dialog.Title className="inline-block">
                                    {props.title}
                                </Dialog.Title>
                                {props.share &&
                                    props.isFileDropped() && (
                                        <a
                                            href="#"
                                            className="absolute right-5 text-sky-500"
                                            onClick={props.share}
                                        >
                                            Share
                                        </a>
                                    )}
                            </div>
                        )}
                        <div className="w-full h-full">{props.children}</div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    );
}
