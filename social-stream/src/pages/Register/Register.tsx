import { useState } from "react";
import AuthApi, { RegisterPayload } from "../../backendApi/AuthApi";
import { BaseUrl } from "../../../config";
import { Link } from "react-router-dom";

const defaultData: RegisterPayload = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    dob: ""
}
const FormRegistration = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [formData, setFormData] = useState<RegisterPayload>(defaultData);
    const authApi = new AuthApi(BaseUrl);
    return (
        <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-white px-5">
            <div className=" flex flex-col items-end justify-start  overflow-hidden mb-2 xl:max-w-3xl w-full">
                <div className="flex">
                    <h3 className="text-white">Dark Mode : &nbsp;</h3>
                    <label className="inline-flex relative items-center mr-5 cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={darkMode}
                            readOnly
                        />
                        <div
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}
                            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                        ></div>
                    </label>
                </div>
            </div>
            <div
                className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"
                    }  w-full p-5 sm:p-10 rounded-md`}
            >
                <h1
                    className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
                        }`}
                >
                    Register for a free account
                </h1>
                <div className="w-full mt-8">
                    <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="text"
                                placeholder="Your first name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.currentTarget.name]: e.currentTarget.value
                                    })
                                }}
                            />
                            <input
                                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.currentTarget.name]: e.currentTarget.value
                                    })
                                }}
                                placeholder="Your last name"
                            />
                        </div>
                        <input
                            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                ? "bg-[#302E30] text-white focus:border-white"
                                : "bg-gray-100 text-black focus:border-black"
                                }`}
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [e.currentTarget.name]: e.currentTarget.value
                                })
                            }}
                            placeholder="Enter your Dat of birth"
                        />
                        <input
                            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                ? "bg-[#302E30] text-white focus:border-white"
                                : "bg-gray-100 text-black focus:border-black"
                                }`}
                            type="test"
                            name="username"
                            value={formData.username}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [e.currentTarget.name]: e.currentTarget.value
                                })
                            }}
                            placeholder="Choose your Usernmae"
                        />
                        <input
                            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                ? "bg-[#302E30] text-white focus:border-white"
                                : "bg-gray-100 text-black focus:border-black"
                                }`}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [e.currentTarget.name]: e.currentTarget.value
                                })
                            }}
                            placeholder="Enter your email"
                        />
                        {/* <input
                            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                ? "bg-[#302E30] text-white focus:border-white"
                                : "bg-gray-100 text-black focus:border-black"
                                }`}
                            type="tel"

                            placeholder="Enter your phone"
                        /> */}
                        <input
                            className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                ? "bg-[#302E30] text-white focus:border-white"
                                : "bg-gray-100 text-black focus:border-black"
                                }`}
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [e.currentTarget.name]: e.currentTarget.value
                                })
                            }}
                        />
                        <button
                            onClick={() => {
                                authApi.registerUser(formData)
                            }}
                            className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg
                                className="w-6 h-6 -ml-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">Register</span>
                        </button>
                        <p className="mt-6 text-xs text-gray-600 text-center">
                            Already have an account?{" "}
                            <Link to={"/login"}>
                                <div className="text-xs text-gray-500 capitalize text-center w-full">
                                    <span className="text-[#E9522C] font-semibold">Login</span>
                                </div>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FormRegistration;
