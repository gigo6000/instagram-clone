import React, { useState, useCallback, useEffect, Fragment } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ModalSettings from "./ModalSettings";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

library.add(fab, fas, far);

export default function App() {
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/accounts/login" exact element={<Login />} />
                <Route
                    path="/"
                    exact
                    element={
                        <ProtectedRoute>
                            <Navbar
                                setIsSettingsModalOpen={setIsSettingsModalOpen}
                            />
                            <div className="container pt-8 max-w-5xl">
                                <Home />
                            </div>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/:username"
                    element={
                        <ProtectedRoute>
                            <Navbar
                                setIsSettingsModalOpen={setIsSettingsModalOpen}
                            />
                            <div className="container pt-8 max-w-5xl">
                                <Profile
                                    setIsSettingsModalOpen={
                                        setIsSettingsModalOpen
                                    }
                                />
                            </div>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/accounts/edit"
                    element={
                        <ProtectedRoute>
                            <Navbar
                                setIsSettingsModalOpen={setIsSettingsModalOpen}
                            />
                            <div className="container pt-8 max-w-5xl">
                                <ProfileEdit />
                            </div>
                        </ProtectedRoute>
                    }
                />
            </Routes>

            <ModalSettings
                open={isSettingsModalOpen}
                setOpen={setIsSettingsModalOpen}
            />
        </>
    );
}
