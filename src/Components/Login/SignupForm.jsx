import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { Link, NavLink } from "react-router-dom";

const SignupForm = () => {
    return (
        <div className="min-h-screen w-full bg-white flex justify-center overflow-y-scroll">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    profileName: "",
                    dayOfBirth: "",
                    monthOfBirth: "",
                    yearOfBirth: "",
                    gender: "",
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
                    profileName: Yup.string()
                        .required("Required")
                        .min(
                            3,
                            "Profile name must be between 3 and 30 characters"
                        )
                        .max(
                            30,
                            "Profile name must be between 3 and 30 characters"
                        )
                        .matches(
                            /^[a-zA-Z0-9_-]+$/,
                            "Profile name can only contain letters, numbers, underscores, and hyphens"
                        ),
                    dayOfBirth: Yup.number()
                        .typeError("Invalid date of birth")
                        .required("Date of birth is required")
                        .test(
                            "isValidDayOfBirth",
                            "Invalid day of birth",
                            function (value) {
                                const { monthOfBirth, yearOfBirth } =
                                    this.parent;
                                const daysInMonth = new Date(
                                    yearOfBirth,
                                    monthOfBirth,
                                    0
                                ).getDate();
                                return !(
                                    isNaN(value) ||
                                    value < 1 ||
                                    value > daysInMonth
                                );
                            }
                        ),
                    monthOfBirth: Yup.number()
                        .typeError("Invalid month of birth")
                        .required("Month of birth is required")
                        .min(1, "Invalid month of birth")
                        .max(12, "Invalid month of birth"),
                    yearOfBirth: Yup.number()
                        .typeError("Invalid year of birth")
                        .required("Year of birth is required")
                        .min(1900, "Invalid year of birth")
                        .max(new Date().getFullYear(), "Invalid year of birth"),
                    receiveMessage: Yup.boolean(),
                    shareData: Yup.boolean(),
                })}
                onSubmit={(values, actions) => {
                    console.log(values);
                }}
                autoComplete="off">
                <Form className="w-[450px] h-[100vh] py-10">
                    <div className="flex w-full justify-center gap-2">
                        <img
                            src="/Spotify_logo_with_text.svg"
                            alt=""
                            className="h-[50px] object-cover"
                        />
                    </div>
                    <h1 className="text-[28px] text-black font-[Gotham-Bold] flex justify-center my-[40px]">
                        Sign up for free to start listening.
                    </h1>
                    <div className="w-full flex flex-col items-center">
                        <button className="h-[48px] w-[406px] bg-[#405a93] rounded-full flex items-center justify-center p-6 mb-[22px]">
                            {/* <img src="/logoFacebook.svg" alt="" /> */}
                            <span className="text-white font-[Gotham-Regular]">
                                Sign up with Facebook
                            </span>
                        </button>
                        <button className="h-[48px] w-[406px] bg-transparent border-black border-2 rounded-full flex items-center justify-center p-6 mb-[22px]">
                            <img src="/logoGoogle.svg" alt="" />
                            <span className="text-black font-[Gotham-Regular]">
                                Sign up with Google
                            </span>
                        </button>
                    </div>
                    <h3 className="font-[Gotham-Light] flex justify-center mb-4">
                        or
                    </h3>
                    <MyInput
                        label="What's your email?"
                        name="email"
                        type="email"
                        placeholder="Enter your email.">
                        <h3 className="mt-1 text-[14px] font-[Gotham-Regular] text-[#1db954] underline">
                            Use phone number instead.
                        </h3>
                    </MyInput>
                    <MyInput
                        label="Create a password"
                        name="password"
                        placeholder="Create a password."
                        type="password"></MyInput>
                    <MyInput
                        label="What should we call you?"
                        name="profileName"
                        placeholder="Enter profile name.">
                        <h3 className="mt-2 text-[12px] font-[Gotham-Bold] text-gray-900">
                            This appears on your profile.
                        </h3>
                    </MyInput>

                    <div className="pb-6 flex flex-col">
                        <h3 className="text-[14px] font-[Gotham-Bold] pb-2">
                            What's your date of birth?
                        </h3>
                        <div className="flex gap-[22.5px] pb-6">
                            <div className=" flex flex-col">
                                <label
                                    htmlFor="dayOfBirth"
                                    className="text-[14px] font-[Gotham-Regular] pb-2">
                                    Day
                                </label>
                                <Field
                                    type="text"
                                    name="dayOfBirth"
                                    className="w-[90px] h-[48px] border-gray-500 border-[1px] flex items-center py-2 px-[14px] font-[Gotham-Light] text-[18px] focus:outline-none rounded-md resize-none placeholder:font-[Gotham-Regular] placeholder:text-gray-400 placeholder:text-[14px]"
                                    placeholder="DD"></Field>
                                <div className="mt-1 text-[14px] font-[Gotham-Regular] text-red-500">
                                    <ErrorMessage name="dayOfBirth"></ErrorMessage>
                                </div>
                            </div>
                            <MySelectBox label="Month" name="monthOfBirth">
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </MySelectBox>
                            <div className=" flex flex-col">
                                <label
                                    htmlFor="yearOfBirth"
                                    className="text-[14px] font-[Gotham-Regular] pb-2">
                                    Year
                                </label>
                                <Field
                                    type="text"
                                    name="yearOfBirth"
                                    className="w-[112.5px] h-[48px] border-gray-500 border-[1px] flex items-center py-2 px-[14px] font-[Gotham-Light] text-[18px] focus:outline-none rounded-md resize-none placeholder:font-[Gotham-Regular] placeholder:text-gray-400 placeholder:text-[14px]"
                                    placeholder="YYYY"></Field>
                                <div className="mt-1 text-[14px] font-[Gotham-Regular] text-red-500">
                                    <ErrorMessage name="yearOfBirth"></ErrorMessage>
                                </div>
                            </div>
                        </div>
                        <div className="pb-6">
                            <label
                                htmlFor="gender"
                                className="text-[14px] font-[Gotham-Bold] pb-2">
                                What's your gender?
                            </label>
                            <div className="w-full h-[64px] flex flex-wrap">
                                <label
                                    htmlFor="male"
                                    children
                                    className="mr-4 text-[14px] flex items-center font-[Gotham-Regular] py-1 h-[20px] w-[83.69px]">
                                    <Field
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        className="mr-2"></Field>
                                    Male
                                </label>
                                <label
                                    htmlFor="Female"
                                    children
                                    className="mr-4 text-[14px] flex items-center font-[Gotham-Regular] py-1 h-[20px] w-[83.69px]">
                                    <Field
                                        type="radio"
                                        id="Female"
                                        name="gender"
                                        value="Female"
                                        className="mr-2"></Field>
                                    Female
                                </label>
                                <label
                                    htmlFor="Non-binary"
                                    children
                                    className="mr-4 text-[14px] flex items-center font-[Gotham-Regular] py-1 h-[20px] w-[123.83px]">
                                    <Field
                                        type="radio"
                                        id="Non-binary"
                                        name="gender"
                                        value="Non-binary"
                                        className="mr-2"></Field>
                                    Non-binary
                                </label>
                                <label
                                    htmlFor="Other"
                                    children
                                    className="mr-4 text-[14px] flex items-center font-[Gotham-Regular] py-1 h-[20px] w-[88.75px]">
                                    <Field
                                        type="radio"
                                        id="other"
                                        name="gender"
                                        value="other"
                                        className="mr-2"></Field>
                                    Other
                                </label>
                                <label
                                    htmlFor="Prefer"
                                    children
                                    className="mr-4 text-[14px] flex items-center font-[Gotham-Regular] py-1 h-[20px] w-[155px]">
                                    <Field
                                        type="radio"
                                        id="prefer"
                                        name="gender"
                                        value="prefer"
                                        className="mr-2"></Field>
                                    Prefer not to say
                                </label>
                            </div>
                        </div>
                        <MyCheckbox name="receiveMessage">
                            <p>
                                I would prefer not to receive marketing messages
                                from Tuneify
                            </p>
                        </MyCheckbox>
                        <MyCheckbox name="shareData">
                            <p>
                                Share my registration data with Tuneify's
                                content providers for marketing purposes.
                            </p>
                        </MyCheckbox>
                        <div className="w-full flex flex-col items-center">
                            <p className="text-[11px] font-[Gotham-Regular] pb-3">
                                By clicking on sign-up, you agree to Spotify's{" "}
                                <span className="underline text-[#1db954]">
                                    Terms and Conditions of Use
                                </span>
                                .
                            </p>
                            <p className="text-[11px] font-[Gotham-Regular] pb-3 text-center">
                                To learn more about how Spotify collects, uses,
                                shares and protects your personal data, please
                                see{" "}
                                <span className="underline text-[#1db954]">
                                    Tuneify's Privacy Policy
                                </span>
                                .
                            </p>
                            <button
                                type="submit"
                                className="h-[56px] w-[158.91px] bg-[#1fd760] rounded-full mb-6 text-black font-[Gotham-Bold] hover:bg-green-600">
                                Sign up
                            </button>
                            <h2 className="text-[16px] font-[Gotham-Regular]">
                                Have an account?{" "}
                                <Link to={"/signin"}>
                                    <span className="underline text-[#1db954] hover:text-green-600 cursor-pointer">
                                        Log in
                                    </span>
                                </Link>
                                .
                            </h2>
                        </div>
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
const MySelectBox = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className=" flex flex-col">
            <label
                htmlFor={props.id || props.name}
                className="text-[14px] font-[Gotham-Regular] pb-2">
                {label}
            </label>
            <select
                className="w-[202.5px] h-[48px] border-gray-500 border-[1px] flex items-center py-2 px-[14px] font-[Gotham-Light] text-[18px] focus:outline-none rounded-md"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="mt-1 text-[14px] font-[Gotham-Regular] text-red-500">
                    {meta.error}
                </div>
            ) : null}
        </div>
    );
};
const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="pb-6">
            <label className="mr-4 text-[14px] flex items-center font-[Gotham-Regular] py-1 h-[20px] w-[443.73px] pb-6 gap-2">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="mt-1 text-[14px] font-[Gotham-Regular] text-red-500">
                    {meta.error}
                </div>
            ) : null}
        </div>
    );
};

export default SignupForm;
