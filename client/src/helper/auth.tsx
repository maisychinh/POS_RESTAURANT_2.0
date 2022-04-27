export const login = (data:{name: string,user_id: string,role: string}) => {
  localStorage.setItem("user", data.name);
  localStorage.setItem("user_id", data.user_id);
  localStorage.setItem("role", data.role);
};
export const logout = () => {
  localStorage.clear();
};
