import React from "react";

import { AiFillHome, AiOutlineFlag, AiOutlineShopping } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv, MdOutlineSubscriptions, MdOutlineWatchLater, MdOutlinePodcasts} from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiHanger } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle, FiFilm } from "react-icons/fi";
import { SiYoutubeshorts } from "react-icons/si";
import { RiHistoryFill } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { PiFilmSlateLight } from "react-icons/pi";
import { BsPersonVideo } from "react-icons/bs";

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Shorts", icon: <SiYoutubeshorts />, type: "category" },
    { name: "Subscriptions", icon: <MdOutlineSubscriptions />, type: "category", divider: true},

    { name: "Your channel", icon: <BsPersonVideo />, type: "category" },
    { name: "History", icon: <RiHistoryFill />, type: "category" },
    { name: "Your videos", icon: <GoVideo />, type: "category" },
    { name: "Watch Later", icon: <MdOutlineWatchLater />, type: "category" },
    { name: "Liked videos", icon: <BiLike />, type: "category", divider: true},
    
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Shopping", icon: <AiOutlineShopping />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <PiFilmSlateLight />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    { name: "Fashion & beauty", icon: <GiHanger />, type: "category" },
    {
        name: "Podcasts",
        icon: <MdOutlinePodcasts />,
        type: "category",
        divider: true,
    },

    { name: "YouTube Premium", icon: <FaYoutube />, type: "menu" },
    { name: "YouTube Studio", icon: <FaYoutube />, type: "menu" },
    { name: "YouTube Music", icon: <FaYoutube />, type: "menu" },
    { name: "YouTube Kids", icon: <FaYoutube />, type: "menu", divider: true},
   
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report history", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];