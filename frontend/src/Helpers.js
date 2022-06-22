export const getImageUrl = (imagePath) => {
    return `http://localhost/storage/${imagePath.replace("public/", "")}`;
};

export const signOut = async (client, navigate, logout) => {
    try {
        await logout();
        localStorage.removeItem("token");
        client.clearStore();
        navigate("/accounts/login");
    } catch (error) {
        console.log("error:", error);
    }
};
