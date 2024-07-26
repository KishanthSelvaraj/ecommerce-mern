import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import {FaOpencart } from "react-icons/fa";
// images
import logo from "../assets/Elogo.jpg";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const {getTotalCartItem}= useContext(ShopContext);
  return (
    <header className="fixed top-0 left-0 m-auto mx-auto max-w-[2640px] px- lg:px-20 w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        {/* logo */}
        <div className="flex items-center"> 
          <Link>
            <img src={logo} alt="" height={66} width={66} />
          </Link>
         <span className="font-bold text-xl hidden md:flex"> Shoppee</span>
        </div>
        {/* navbar desktop*/}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15 "}
        />
        {/* navbar mobile*/}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 tranisition-all duration-300"
              : "flex items-start flex-col gap-y-12 fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 tranisition-all duration-300"
          }`}
        />
        {/* button */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="hover:ring-[#ff7477] md:hidden cursor-pointer hover:text-[#ff7477] mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="hover:ring-[#ff7477] md:hidden cursor-pointer hover:text-[#ff7477] mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}><FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full"/><span className="relative flexCenter w-5 h-5 rounded-full bg-[#ff7477] text-white medium-14 -top-2">{getTotalCartItem()}</span> </NavLink>
         {localStorage.getItem('auth-token')  ? <NavLink onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}} to={"logout"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16 hidden"}> <img src={logout} alt="logout" height={19} width={19} className=""/> Logout</NavLink>:
            <NavLink to={"login"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}> <img src={user} alt="usericon" height={19} width={19} className=""/> Login</NavLink>}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
