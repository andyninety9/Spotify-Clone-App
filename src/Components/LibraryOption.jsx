import React, { Fragment } from "react";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import { useDataLayerValue } from "./Context/DataLayer";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const LibraryOption = () => {
    const [{ get_related_artist }, dispatch] = useDataLayerValue();
    console.log(get_related_artist);
    return (
        <div>
            <Fragment>
                <div className="flex items-baseline px-4 pt-5">
                    <h1 className="text-white text-[34px] font-[Gotham-Regular]">
                        Related{" "}
                        <span className="bg-gradient-PurplePink bg-clip-text text-[34px] font-bold text-transparent">
                            Artists
                        </span>
                    </h1>
                </div>
                <div className="py-4 w-full overflow-x-scroll">
                    {" "}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-5">
                        {get_related_artist?.artists.map(
                            (get_related_artist, index) => (
                                <div
                                    key={get_related_artist?.id}
                                    className="h-[244px] w-[178px] bg-[#484848] rounded-lg flex flex-col items-center p-2 gap-3 hover:bg-[#606060] relative transition-all">
                                    {" "}
                                    <button className="absolute h-full w-full bg-transparent -translate-y-2 opacity-0 hover:opacity-100 transition-all">
                                        {" "}
                                        <PlayCircleFilledOutlinedIcon
                                            sx={
                                                ({ fontSize: 60 },)
                                            }
                                            className="text-green-500 translate-x-[80%] translate-y-[10px]"></PlayCircleFilledOutlinedIcon>
                                    </button>{" "}
                                    <img
                                        src={
                                            get_related_artist?.images[0]
                                                ?.url || "/Personal Card 1.svg"
                                        }
                                        alt=""
                                        className="h-[160px] w-[160px]"
                                    />{" "}
                                    <div className="overflow-hidden mr-auto">
                                        {" "}
                                        <h1 className="text-[14px] text-white h-10 overflow-hidden">
                                            {get_related_artist?.name}
                                        </h1>{" "}
                                        <div className="flex gap-2 items-center">
                                            <FavoriteOutlinedIcon sx={{ fontSize: 15 }} className="text-gray-400 "></FavoriteOutlinedIcon>
                                            <p className="text-gray-400 text-[12px]">
                                                {
                                                    get_related_artist?.followers
                                                        ?.total
                                                }
                                            </p>{" "}
                                        </div>
                                    </div>{" "}
                                </div>
                            )
                        )}
                    </div>{" "}
                </div>
            </Fragment>
        </div>
    );
};

export default LibraryOption;
