// --------------------import area------------------------

import { Link } from "react-router-dom";
import Navbar2 from "../../Shared/Navbar/Navbar2";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import OthersLogin from "../../Shared/OthersLogin/OthersLogin";
import { useLocation, useNavigate } from "react-router-dom";

// --------------------import area------------------------

const Register = () => {
  const { userRegister, user, loading } = useContext(AuthContext);
  const [password, setPassword] = useState("null");
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
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setPassword(watch("Password"));
  }, [watch("Password")]);

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
                setTimeout(() => {
                  if (location.state) {
                    navigator(location.state);
                  } else {
                    navigator("/");
                  }
                }, 4000);
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
        } else if (err.code === "auth/network-request-failed") {
          Swal.fire({
            icon: "warning",
            text: "Network request failed! Please check network and try again!",
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
                type="text"
                {...register("Email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {errors.Email?.type === "required" && (
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
                {...register("Password", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
                })}
              />
              {errors.Password?.type === "required" && (
                <p className="text-red-500 text-xs">This filed id required!</p>
              )}
              {errors?.Password?.type === "minLength" && (
                <p className="text-red-500 text-xs">
                  password minimum length must be 8!
                </p>
              )}
              {errors?.Password?.type === "pattern" && (
                <p className="text-red-500 text-xs">
                  password must contain at least one lowercase letter, uppercase
                  letter, digit and special characters!
                </p>
              )}
            </div>
            <div className="">
              <input
                className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
                placeholder="Confirm password"
                type="password"
                {...register("ConfirmPassword", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
                  validate: (ConfirmPassword) => {
                    if (ConfirmPassword !== password) {
                      return "Passwords do not match!";
                    }
                  },
                })}
              />
              {errors?.ConfirmPassword?.type === "required" && (
                <p className="text-red-500 text-xs">This filed id required!</p>
              )}
              {errors?.ConfirmPassword?.type === "minLength" && (
                <p className="text-red-500 text-xs">
                  password minimum length must be 8!
                </p>
              )}
              {errors?.ConfirmPassword?.type == "validate" && (
                <p className="text-red-500 text-xs">password dose not match</p>
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
        <OthersLogin></OthersLogin>
      </div>
    </div>
  );
};

export default Register;
