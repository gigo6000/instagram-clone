export const getImageUrl = (imagePath) => {
    const baseUrl = "http://localhost";

    return `${baseUrl}/storage/${imagePath.replace("public/", "")}`;
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

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};
