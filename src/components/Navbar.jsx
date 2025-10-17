import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import shamimImg from "../assets/shamim.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const logOut = () => {
    logoutUser();
  };
  return (
    <div className="flex justify-between items-center my-3">
      <div className=""></div>
      <div className="nav flex gap-3 text-[#706F6F]">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-2 items-center">
        {user ? (
          <img
            className="h-[35px] w-[35px] ring rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            src={shamimImg}
            alt="shamimImg"
          />
        ) : (
          <img src={userImg} alt="shamimImg" />
        )}
        {user ? (
          <button className="btn btn-primary px-10" onClick={logOut}>
            Logout
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
