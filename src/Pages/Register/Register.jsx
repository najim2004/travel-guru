import { Link } from "react-router-dom";
import Navbar2 from "../../Shared/Navbar/Navbar2";
import fbIcon from "../../assets/fb.png";
import gIcon from "../../assets/google.png";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { userRegister, user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userRegister(data.Email, data.Password)
      .then((userCredentials) => {
        updateProfile(userCredentials.user, {
          displayName: data?.Name,
          photoURL: data?.ImgUrl,
        })
          .then(() => {
            sendEmailVerification(userCredentials.user)
              .then(() => {
                Swal.fire({
                  icon: "success",
                  title: "Account created successfully",
                  text: "An verification email has been sent, please check your mail box!",
                  showConfirmButton: false,
                  timer: 4000,
                });
                setTimeout(() => {}, 4000);
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.message,
                });
              });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "warning",
            text: "This email is already in registered!",
          });
        } else {
          Swal.fire({
            icon: "warning",
            text: "Something went wrong! Please try again!",
          });
        }
      });
  };
  return (
    <div>
      <Navbar2></Navbar2>
      <div className="flex flex-col  h-screen justify-center items-center">
        <div className="w-[500px] rounded-md border-[1px] border-border px-12 py-6">
          <h3 className="text-2xl font-bold">Create an account</h3>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="">
              <input
                className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
                placeholder="Full Name"
                type="text"
                {...register("Name", { required: true })}
                aria-invalid={errors.FirstName ? "true" : "false"}
              />
              {errors.Name && (
                <p className="text-red-500 text-xs">This filed id required!</p>
              )}
            </div>
            <div className="">
              <input
                className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
                placeholder="Image URL"
                type="text"
                {...register("ImgUrl")}
              />
            </div>

            <div className="">
              <input
                className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
                placeholder="Email"
                type="email"
                {...register("Email", { required: true })}
              />
              {errors.Email && (
                <p className="text-red-500 text-xs">This filed id required!</p>
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
            <div className="">
              <input
                className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
                placeholder="Confirm password"
                type="password"
                {...register("ConfirmPassword", { required: true })}
              />
              {errors.ConfirmPassword && (
                <p className="text-red-500 text-xs">This filed id required!</p>
              )}
            </div>
            <input
              type="submit"
              value="Create an account"
              className="mt-8 w-full btn font-bold h-10 bg-commonOrg !rounded-none"
            />
          </form>
          <p className="font-medium text-center mt-4">
            Already have an account?{" "}
            <Link to={"/login"} className="text-commonOrg hover:underline">
              Login
            </Link>
          </p>
        </div>
        <div className="flex justify-center mb-3 items-center gap-2 mt-3 w-full">
          <hr className="h-[1px] min-w-[200px] bg-border" />
          <p className="font-medium">Or</p>
          <hr className="h-[1px] min-w-[200px] bg-border" />
        </div>
        <button className="h-[50px] hover:!bg-commonOrg flex pl-2 btn !justify-normal !bg-transparent w-[461px] rounded-[57px] border-[1px] border-border gap-[97px] items-center">
          <img className="size-9" src={fbIcon} alt="" />{" "}
          <p>Continue with Facebook</p>
        </button>
        <button className="h-[50px] hover:!bg-commonOrg mt-2 pl-2 btn !justify-normal !bg-transparent flex w-[461px] rounded-[57px] border-[1px] border-border gap-[97px] items-center">
          <img className="size-9" src={gIcon} alt="" />{" "}
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Register;
