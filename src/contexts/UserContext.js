import { createContext, useState } from "react";
import UserApis from "../apis/userApis";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    authLoading: false,
    isAuthenticated: false,
    user: null,
  });

  const login = async (userform) => {
    try {
      const result = await UserApis.userLogin(userform);

      if (result.status === "success") {
        localStorage.setItem("TokenAccess", result.accessToken);
        getUser();
      }

      return result;
    } catch (error) {
      console.log(error);
      return { status: "fail", mess: error.mess };
    }
  };
  const signin = async (userform) => {
    const result = await UserApis.userSignin(userform);
    if (result.status === "success") {
      localStorage.setItem("TokenAccess", result.accessToken);
      getUser();
      return "success";
    } else {
      return result.mess;
    }
  };
  const logout = () => {
    localStorage.removeItem("TokenAccess");
    setUser({
      ...user,
      user: null,
    });
  };

  const getUser = async () => {
    try {
      const newuser = await UserApis.getUser();
      setUser({
        ...user,
        user: newuser.data,
      });
    } catch (error) {
      return {
        status: "fail",
        mess: error.message,
      };
    }
  };
  // context data
  const dataUser = {
    user,
    login,
    signin,
    logout,
    getUser,
  };
  return (
    <UserContext.Provider value={dataUser}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
