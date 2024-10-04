import fbIcon from "../../assets/fb.png";
import gIcon from "../../assets/google.png";

const OthersLogin = () => {
  return (
    <div>
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
  );
};

export default OthersLogin;
