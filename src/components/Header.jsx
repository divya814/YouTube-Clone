import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../images/youtube-logo.webp";
//import logo from "../images/web.jpg"

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
// import { CgClose } from "react-icons/cg";
import { MdKeyboardVoice } from "react-icons/md";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    // destructured Context array as dictionary defined in ContextApi
    const { loading, mobileMenu, setMobileMenu } = useContext(Context);

    // we can not use useNavigate directly so creating a variable for it
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        // using optional chaining in if condition, if event happens, user pressed Enter key or search button and query length is > 0
        if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
            navigate(`/searchResult/${searchQuery}`);
        }
    };

    // const mobileMenuToggle = () => {
    //     setMobileMenu(!mobileMenu);
    // };

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        // md is for screen size greater than 768 px
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-[56px] px-4 md:px-4 bg-black">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div className="flex cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <SlMenu className="text-white text-lg font-extralight" />

                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-[50px] md:block"
                        src={logo}
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="group flex items-center">
                <div className="flex h-10 pl-4 border border-white/[0.15] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-12 pl-2 items-center justify-center hidden group-focus-within:md:flex group-focus-within:sm:flex">
                        <IoIosSearch className="text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white pl-0 w-38 md:group-focus-within:pl-0 lg:w-[520px] placeholder:text-white/[0.5]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        value={searchQuery}
                    />
                </div>
                <button
                    className="w-[65px] h-10 flex items-center justify-center border border-l-0 border-white/[0.08] rounded-r-3xl bg-white/[0.1] hover:bg-[##717171]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoIosSearch className="text-white text-2xl cursor-pointer font-light" />
                </button>

                <div className="flex items-center justify-center bg-white/[0.15] h-[40px] w-[40px] ml-4 rounded-full hover:bg-white/[0.2]">
                    <MdKeyboardVoice className="text-white text-2xl cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex gap-2.5">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/[0.15]">
                        <RiVideoAddLine className="text-white text-[21px] cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/[0.15]">
                        <FiBell className="text-white text-[21px] cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full mr-8">
                    <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Header;
