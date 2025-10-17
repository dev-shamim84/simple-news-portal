import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" flex justify-center mt-20 items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
        <h2 className="text-center text-2xl font-semibold">
          Log in Your Account
        </h2>
        <div className="card-body py-5 ">
          <form onSubmit={handleLogin} className="flex flex-col gap-2">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="Enter your email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="Enter your password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className=" w-full  btn btn-neutral mt-4">
              Login
            </button>
            <p className="my-3 text-center">
              Dont’t Have An Account ?{" "}
              <Link
                className="font-semibold text-red-400"
                to={"/auth/register"}
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
