import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
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
    <div className="max-w-[1160px] mx-auto mt-9">
      <div className="navbar bg-base-100">
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
        <div className="navbar-center gap-11 hidden lg:flex">
          <div className="flex gap-3 pl-4 w-[370px] border-[1px] border-black h-11 rounded-[5px] bg-[rgba(255,255,255,0.20)] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="h-full w-full outline-none bg-transparent"
              placeholder="Search your Destination..."
              type="text"
            />
          </div>
          <ul className="gap-12 menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-sm font-medium h-11 w-[104px] rounded-[5px ]">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
