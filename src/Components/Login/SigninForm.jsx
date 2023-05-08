import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { Link, NavLink } from "react-router-dom";
import * as Yup from "yup";

const SigninForm = () => {
    return (
        <div className="min-h-screen w-full bg-white flex justify-center overflow-y-scroll">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    password: Yup.string()
                        .min(8, "Password must be at least 8 characters")
                        .matches(
                            /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
                            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                        )
                        .required("Required"),
                })}
                onSubmit={(values, actions) => {
                    console.log(values);
                }}>
                <Form className="w-full max-w-screen-md mx-auto py-5 px-4">
                    <div className="flex w-full justify-center mb-10">
                        <img
                            src="/Spotify_logo_with_text.svg"
                            alt=""
                            className="h-10 object-contain"
                        />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <h3 className="text-sm font-[Gotham-Regular] mb-4 text-center">
                            To continue, log in to Spotify.
                        </h3>
                        <button className="w-full max-w-xs h-12 bg-[#405a93] rounded-full flex items-center justify-center mb-4 px-6">
                            <span className="text-white font-[Gotham-Regular]">
                                CONTINUE WITH FACEBOOK
                            </span>
                        </button>
                        <button className="w-full max-w-xs h-12 bg-transparent border-black border-2 rounded-full flex items-center justify-center mb-4 px-6">
                            <img
                                src="/logoGoogle.svg"
                                alt=""
                                className="h-5 mr-2"
                            />
                            <span className="text-black font-[Gotham-Regular]">
                                CONTINUE WITH GOOGLE
                            </span>
                        </button>
                    </div>
                    <MyInput
                        label="Email address or username"
                        name="email"
                        type="email"
                        placeholder="Enter your email.">
                        <h3 className="mt-1 text-sm font-[Gotham-Regular] text-green-500 underline">
                            Use phone number instead.
                        </h3>
                    </MyInput>
                    <MyInput
                        label="Password"
                        name="password"
                        placeholder="Enter your password."
                        type="password">
                        <h3 className="mt-1 text-sm font-[Gotham-Regular] text-black underline hover:text-green-500 cursor-pointer">
                            Forgot your password?
                        </h3>
                    </MyInput>

                    <div className="w-full flex flex-col items-center">
                        <button
                            type="submit"
                            className="w-40 md:w-56 h-12 bg-[#1fd760] rounded-full mt-6 mb-4 text-black font-[Gotham-Bold] hover:bg-green-600">
                            Sign in
                        </button>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <h3 className="text-sm mb-2">Don't have an account?</h3>
                        <Link to={"/signup"}>
                            <button className="w-full max-w-xs h-12 bg-transparent border-black border-2 rounded-full flex items-center justify-center mb-4 px-6 hover:bg-gray-300">
                                <img
                                    src="/logoGoogle.svg"
                                    alt=""
                                    className="h-5 mr-2"
                                />
                                <span className="text-black font-[Gotham-Regular]">
                                    Sign up with Spotify
                                </span>
                            </button>
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
const MyInput = ({ label, children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="pb-6 flex flex-col">
            <label
                htmlFor={props.id || props.name}
                className="text-[14px] font-[Gotham-Bold] pb-2">
                {label}
            </label>
            <input
                type="text"
                className="w-full h-[48px] border-gray-500 border-[1px] flex items-center py-2 px-[14px] font-[Gotham-Light] text-[18px] focus:outline-none rounded-md resize-none placeholder:font-[Gotham-Regular] placeholder:text-gray-400 placeholder:text-[14px] overflow-hidden"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="mt-1 text-[14px] font-[Gotham-Regular] text-red-500">
                    {meta.error}
                </div>
            ) : null}
            {children}
        </div>
    );
};
export default SigninForm;
