import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar2 = () => {
  const menu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/news"}>News</NavLink>
      </li>
      <li>
        <NavLink to={"/destination"}>Destination</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-[1160px] mx-auto pt-9">
      <div className="navbar justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <img className="w-[120px]" src={logo} alt="" />
        </div>
        <div className="navbar-center gap-12 ">
          <ul className="hidden lg:flex gap-12 menu-horizontal px-1 font-medium text-black">
            {menu}
          </ul>
          <div className="navbar-end">
            <Link to={"/login"}>
              <button className="btn btn-sm font-medium h-11 w-[104px] !rounded-[5px] border-none bg-commonOrg">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
