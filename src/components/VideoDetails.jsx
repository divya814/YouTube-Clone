import React, { useState, useEffect, useContext } from "react";

// importing useParams for getting extra params in the url of the videos
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
    const [video, setVideo] = useState();
    const [relatedVideos, setRelatedVideos] = useState();
    const { id } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.add("custom-h");
        fetchVideoDetails();
        fetchRelatedVideos();
    }, [id]);

    const fetchVideoDetails = () => {
        setLoading(true);
        fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
            console.log(res);
            setVideo(res);
            setLoading(false);
        });
    };

    const fetchRelatedVideos = () => {
        setLoading(true);
        fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
            console.log(res);
            setRelatedVideos(res);
            setLoading(false);
        });
    };

    return (
        <div className="flex justify-center flex-row gradient overflow-y-auto p-5">
            <div className="w-full flex flex-col lg:flex-row mx-0 my-2 lg:mx-auto px-6 lg:px-20">
                <div className="flex flex-col w-full lg:w-[calc(100%-350px)] lg:pr-6">
                    <div className="w-full h-[200px] lg:h-[600px] rounded-2xl">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="100%"
                            height="100%"
                            className="w-full rounded-[12px]"
                            playing={true}                          
                        />
                    </div>
                    <div className="text-white font-bold text-sm lg:text-xl mt-4 line-clamp-2">
                        {video?.title}
                    </div>
                    <div className="flex justify-between flex-col lg:flex-row mt-4">
                        <div className="flex">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={video?.author?.avatar[0]?.url}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="text-white text-lg font-semibold flex items-center">
                                    {video?.author?.title}
                                    {video?.author?.badges[0]?.type ===
                                        "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                    )}
                                </div>
                                <div className="text-white/[0.7] text-sm">
                                    {video?.author?.stats?.subscribersText}
                                </div>
                            </div>
                        </div>
                        <div className="text-[12px] lg:text-[14px] flex text-white mt-4 lg:mt-0">
                            <div className="flex items-center justify-center h-10 px-2 lg:px-6 rounded-3xl bg-white/[0.15]">
                                <AiOutlineLike className="text-white mr-2" />
                                {`${abbreviateNumber(
                                    video?.stats?.views,
                                    2
                                )} Likes`}
                            </div>
                            <div className="flex items-center justify-center px-2 h-10 lg:px-6 rounded-3xl bg-white/[0.15] ml-4">
                                {`${abbreviateNumber(
                                    video?.stats?.views,
                                    2
                                )} Views`}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-sans flex flex-col w-full py-6 px-0 lg:p-0 lg:w-[400px]">
                    {relatedVideos?.contents?.map((item, index) => {
                        if (item?.type !== "video") return false;
                        return (
                            <SuggestionVideoCard
                                key={index}
                                video={item?.video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;
