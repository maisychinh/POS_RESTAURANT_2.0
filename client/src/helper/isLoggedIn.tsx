const isLoggedIn = () => {
  if (localStorage.getItem("user")) return true;
  return false;
};
export default isLoggedIn;
