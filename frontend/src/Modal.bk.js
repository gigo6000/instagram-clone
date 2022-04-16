import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal(props) {
    const { open, setOpen } = props;

    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-neutral-800 bg-opacity-95 transition-opacity" />
                    </Transition.Child>

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
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-150"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                    >
                        <div
                            className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden bg-red shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-md sm:w-full`}
                        >
                            {props.title && (
                                <div className="text-center border-b py-2 font-semibold">
                                    {props.title}
                                </div>
                            )}
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-screen">
                                {props.children}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

// import React, { useState } from "react";
// import { Modal } from "@headlessui/react";
//
// function Modal(props) {
//     return (
//         <div
//             className={`h-screen w-screen overflow-hidden flex items-center justify-center bg-neutral-800 bg-opacity-95 fixed top-0 left-0 z-50 ${
//                 !props.isOpen ? "invisible" : ""
//             }`}
//             onClick={() => props.setIsOpen(false)}
//         >
//             <div
//                 className={`${
//                     props.size === "xs" ? "w-1/5 h-fit" : "w-1/2 h-3/4"
//                 } bg-white rounded-2xl transition ease-in-out scale-150 ${
//                     props.isOpen ? "scale-100" : ""
//                 }`}
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 {#<{(| Header |)}>#}
//                 {props.title && (
//                     <div className="text-center border-b py-2 font-semibold">
//                         {props.title}
//                     </div>
//                 )}
//                 {#<{(| Content|)}>#}
//                 <div className="flex flex-col items-center justify-center min-h-full">
//                     {props.children}
//                 </div>
//                 {#<{(| Footer |)}>#}
//                 <div className="" />
//             </div>
//         </div>
//     );
// }
//
// export default Modal;
