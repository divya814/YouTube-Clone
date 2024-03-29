import React from "react";
// 3rd party component to make sure that our views numbers shows in proper readable form (coma separated)
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";

const VideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className="flex flex-col mb-6">
                <div className="relative w-full rounded-none h-48 md:h-[226px] sm:rounded-[12px] overflow-hidden hover:rounded-none transition-all ease-in-out">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.thumbnails[0]?.url}
                    />
                    {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds}/>
                    )}
                </div>
                <div className="flex text-white mt-3">
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={video?.author?.avatar[0]?.url}
                            />
                        </div>
                    </div>
                    <div className="font-sans flex flex-col ml-3 overflow-hidden">
                        <span className="font-[500] text-[16px] line-clamp-2">
                            {video?.title}
                        </span>
                        <span className=" font-[400] text-[14px] mt-2 text-white/[0.7] flex items-center">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                            )}
                        </span>
                        <div className="font-[400] flex text-[14px] text-white/[0.7] truncate overflow-hidden">
                            <span>{`${abbreviateNumber(
                                video?.stats?.views,
                                2
                            )} views`}</span>
                            <span className="flex text-[25px] leading-none text-white/[0.7] relative top-[-10px] mx-1">
                                .
                            </span>
                            <span className="truncate">
                                {video?.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
