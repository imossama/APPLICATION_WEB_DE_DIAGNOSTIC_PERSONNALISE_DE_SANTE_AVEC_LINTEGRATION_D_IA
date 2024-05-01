export const setUserIdToLocalStorage = (userId) => {
  localStorage.setItem("userId", userId);
};

export const getUserIdFromLocalStorage = () => {
  return localStorage.getItem("userId");
};

export const clearUserIdFromLocalStorage = () => {
  localStorage.removeItem("userId");
};
