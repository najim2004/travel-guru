import { Link } from "react-router-dom";
import Navbar2 from "../../Shared/Navbar/Navbar2";
import fbIcon from "../../assets/fb.png"
import gIcon from "../../assets/google.png"
const Login = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div className="flex flex-col h-[calc(100vh-108px)] justify-center items-center">
        <div className="w-[500px] rounded-md border-[1px] border-border px-12 py-6">
          <h3 className="text-2xl font-bold">Login</h3>
          <form action="">
            <input
              className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
              placeholder="Email"
              type="email"
            />
            <input
              className="outline-none font-medium w-full h-10 mt-6 bg-transparent border-b-[1px] border-border"
              placeholder="Password"
              type="password"
            />
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
            Don’t have an account? <Link to={'/register'} className="text-commonOrg hover:underline">Create an account</Link>
          </p>
        </div>
        <div className="flex justify-center mb-3 items-center gap-2 mt-3 w-full">
            <hr className="h-[1px] min-w-[200px] bg-border" />
            <p className="font-medium">Or</p>
            <hr className="h-[1px] min-w-[200px] bg-border" />
        </div>
        <button className="h-[50px] hover:!bg-commonOrg flex pl-2 btn !justify-normal !bg-transparent w-[461px] rounded-[57px] border-[1px] border-border gap-[97px] items-center"><img className="size-9" src={fbIcon} alt="" /> <p>Continue with Facebook</p></button>
        <button className="h-[50px] hover:!bg-commonOrg mt-2 pl-2 btn !justify-normal !bg-transparent flex w-[461px] rounded-[57px] border-[1px] border-border gap-[97px] items-center"><img className="size-9" src={gIcon} alt="" /> <p>Continue with Google</p></button>
      </div>
    </div>
  );
};

export default Login;
