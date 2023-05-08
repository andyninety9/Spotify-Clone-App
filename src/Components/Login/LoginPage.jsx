import React from "react";
import { Link, NavLink } from "react-router-dom";
import { loginUrl } from "../../spotify";

const LoginPage = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-white">
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
                className="h-[100px] md:h-[150px] lg:h-[200px] w-full object-contain"
            />
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-[Gotham-Regular] text-center my-10 text-black">
                Welcome to Spotify Clone App 🚀
            </h1>
            <a href={loginUrl}>
                <button className="h-12 md:h-16 lg:h-20 w-48 md:w-60 lg:w-72 rounded-full text-white font-[Gotham-Regular] text-base md:text-lg lg:text-xl bg-green-500 hover:bg-green-600">
                    Explore
                </button>
            </a>
        </div>
    );
};

export default LoginPage;
