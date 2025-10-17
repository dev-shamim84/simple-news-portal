import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
const Register = () => {
  const { registerUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
    registerUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        logoutUser()
          .then((result) => {
            console.log(result);
            navigate("/auth/login");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="  flex justify-center mt-20 items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
        <h2 className="text-center text-2xl font-semibold">
          Register your account
        </h2>
        <div className="card-body py-5 ">
          <form onSubmit={handleRegister} className="flex flex-col gap-2">
            {/* name */}
            <label className="label font-bold">Name</label>
            <input
              type="Enter your name"
              name="name"
              className="input"
              placeholder="Email"
            />

            {/* Photo url */}

            <label className="label font-bold">PhotoUrl</label>
            <input
              type="Enter your photoUrl"
              name="photo"
              className="input"
              placeholder="Email"
            />

            {/* Email */}

            <label className="label font-bold">Email</label>
            <input
              type="Enter your email"
              name="email"
              className="input"
              placeholder="Email"
            />

            {/* password */}

            <label className="label font-bold">Password</label>
            <input
              type="Enter your password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <button type="submit" className=" w-full  btn btn-neutral mt-4">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
