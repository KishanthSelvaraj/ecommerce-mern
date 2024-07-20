import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover  bg-center bg-no-repeat h-screen w-full ">
      <div className="max_padd_container relative top-32 xs:top-52 ">
        <h1 className="h1 capitalize max-w-[37rem] text-gray-10">
          <span className="text-[#ff7477]">Online</span> Shopping Hub Plaza
        </h1>
        <p className="text-gray-20 regular-16 mt-6 max-w-[33rem] ">
          Welcome to our fashion haven! Explore our extensive collection of
          stylish and comfortable wear for men, women, and kids. From trendy
          outfits to classic essentials, we have something for every member of
          your family. Discover quality, affordability, and the latest trends
          all in one place.
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3 text-white">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20 text-[#ff7477]">
            176k
            <span className="regular-16 sm:regular-20"> Excellent Reviews</span>
          </div>
        </div>
        <div className="max-xs:flex-col lg:flex gap-2 hidden">
          <NavLink className={"btn_white_rounded flexCenter "}>Shop now</NavLink>
          <NavLink className={"btn_white_rounded flexCenter gap-x-2"}>
            
            <MdOutlineLocalOffer className="text-2xl" /> Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
