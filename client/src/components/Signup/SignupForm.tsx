import React from "react";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
type User = {
  email: string;
  name: string;
  phone: string;
  password: string;
}
type GetUserResponse = {
  data: User
}
const SignupForm = () => {
  const history = useHistory();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/register",{
      method: "POST",
      body: JSON.stringify({
          email: emailInputRef.current?.value,
          password: passwordInputRef.current?.value,
          name: nameInputRef.current?.value,
          phone_number: phoneInputRef.current?.value,
      }),
      headers: {
        "content-type": "application/json"
      }
    })
    if(res.ok){
      history.push("/menu")
    }
  };
  return (
    <div>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"></div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl font-bold">
              WELCOME TO{" "}
              <span
                style={{ color: "#e9ba23" }}
                className="cursor-pointer"
                onClick={() => {
                  history.push("/");
                }}
              >
                POS RESTAURANT
              </span>
            </p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={onSubmitHandler}
            >
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  ref={emailInputRef}
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="name" className="text-lg">
                  Name
                </label>
                <input
                  type="text"
                  ref={nameInputRef}
                  id="name"
                  placeholder="Your name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="phone" className="text-lg">
                  Phone Number
                </label>
                <input
                  ref={phoneInputRef}
                  type="text"
                  id="phone"
                  placeholder="Your phone number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg ">
                  Password
                </label>
                <input
                  ref={passwordInputRef}
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <input
                type="submit"
                value="Sign up"
                style={{ backgroundColor: "#e9ba23" }}
                className="text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer"
              />
            </form>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://sulaindianrestaurant.com/wp-content/uploads/2020/12/indian-food-main-street-1200x800.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
