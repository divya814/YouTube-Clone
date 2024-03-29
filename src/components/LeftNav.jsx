import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <div
            className={`w-[242px] overflow-y-auto h-full py-3 bg-black z-10 translate-x-0 transition ease-in-out delay-200 custom-scroll ${mobileMenu ? "block translate-x-0" : "hidden translate-x-[-100%]"
                }`}
        >
            <div className="flex px-3 flex-col ">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name} >
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/");
                                }}
                                // this class is only for selected category
                                className={`${selectedCategory === item.name
                                    ? "bg-white/[0.15]"
                                    : ""
                                    }`}
                            />
                            {item.divider && (
                                <hr className="my-4 border-white/[0.2]" />
                            )}

                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                <div className="flex flex-col gap-1 text-white/[0.5] text-[13px] pl-3 pr-3">
                    © YouTube Clone by Divya Maheshwari
                </div>
            </div>
        </div>
    );
};

export default LeftNav;
