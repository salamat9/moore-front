export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");
export const cleanUserTokensFromLocalStorage = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};
export const setUserTokensToLocalStorage = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
};


