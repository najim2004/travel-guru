// ---------------- import area ---------------

import { Link } from "react-router-dom";
import Navbar2 from "../../Shared/Navbar/Navbar2";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import OthersLogin from "../../Shared/OthersLogin/OthersLogin";
import { useLocation, useNavigate } from "react-router-dom";
import emoji from "../../assets/emoji.png";

// ---------------- import area ---------------

const Login = () => {
  const { user, userLogin, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      if (location.state) {
        navigator(location.state);
      } else {
        navigator("/");
      }
    }
  }, [user, loading]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitLogin = (data) => {
    userLogin(data.Email, data.Password).then((userCredentials) => {
      if (userCredentials?.user?.emailVerified) {
        Swal.fire({
          imageUrl: `${emoji}`,
          imageWidth: 200,
          title: `Welcome back dear "${userCredentials?.user?.displayName}"`,
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          if (location.state) {
            navigator(location.state);
          } else {
            navigator("/");
          }
        }, 2000);
      } else {
        Swal.fire({
          icon: "warning",
          text: "Please verify your email before logging in!",
        });
      }
    });
  };
  return (
    <div>
      <Navbar2></Navbar2>
      <div className="flex flex-col h-[calc(100vh-108px)] justify-center items-center">
        <div className="w-[500px] rounded-md border-[1px] border-border px-12 py-6">
          <h3 className="text-2xl font-bold">Login</h3>
          <form onSubmit={handleSubmit(onSubmitLogin)} action="">
            <div className="">
              <input
                className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
                placeholder="Email"
                type="email"
                {...register("Email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {errors.Email && (
                <p className="text-red-500 text-xs">This filed id required!</p>
              )}
              {errors?.Email?.type === "pattern" && (
                <p className="text-red-500 text-xs">
                  This is not a valid email!
                </p>
              )}
            </div>
            <div className="">
              <input
                className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
                placeholder="Password"
                type="password"
                {...register("Password", { required: true })}
              />
              {errors.Password && (
                <p className="text-red-500 text-xs">This filed id required!</p>
              )}
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <input className="size-4" type="checkbox" name="" />
                <label className="font-medium" htmlFor="">
                  Remember Me
                </label>
              </div>
              <label
                className="text-commonOrg font-medium hover:underline"
                htmlFor=""
              >
                Forgot Password
              </label>
            </div>
            <input
              type="submit"
              value="Login"
              className="mt-8 w-full btn font-bold h-10 bg-commonOrg !rounded-none"
            />
          </form>
          <p className="font-medium text-center mt-4">
            Don’t have an account?{" "}
            <Link to={"/register"} className="text-commonOrg hover:underline">
              Create an account
            </Link>
          </p>
        </div>
        <OthersLogin></OthersLogin>
      </div>
    </div>
  );
};

export default Login;
