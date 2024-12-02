import React from "react";
import ORUS from '../Images/logo.png'
import { Link } from "react-router-dom";
import Flag from '../Images/flag.png';
import  Avatar from '../Images/avatar.png';
const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src={ORUS}
          alt="ORUS Logo"
          className="h-10"
        />
        <span className="text-xl font-bold text-orange-500">ORUS</span>
      </div>
      <div>
        <Link><span>Create Your Tips</span></Link>   <Link><span className="m-5">Discover </span></Link>
        <Link><span>About</span></Link>
        <Link><span className="m-5">More</span></Link>
      </div>
      <div className="flex items-center gap-4">
        <img src={Flag} alt="" />
        <span>English</span>
        <span>USD - $</span>
        <img src={Avatar} alt="" />
        <button className="btn-orange">Get The App</button>
      </div>
    </header>
  );
};

export default Header;
