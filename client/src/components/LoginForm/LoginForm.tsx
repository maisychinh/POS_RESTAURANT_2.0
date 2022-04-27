import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRef } from "react";
import { login } from "../../helper/auth";
import { authActions } from "../../store/auth-context";
import { useAppDispatch } from "../../store/hooks";
const LoginForm: React.FC = (props) => {
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useAppDispatch()
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: emailInputRef.current?.value,
          password: passwordInputRef.current?.value,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(authActions.login({
          name: data.name,
          user_id: data.user_id,
          role: data.role
        }))
        history.push("/menu");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong!");
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
                  ref={emailInputRef}
                  type="email"
                  id="email"
                  placeholder="your@email.com"
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
              {error !== "" && (
                <div className="text-red-500 pt-3">
                  Something went wrong! Try again!
                </div>
              )}
              <button
                type="submit"
                value="Log In"
                style={{ backgroundColor: "#e9ba23" }}
                className="text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              >
                Submit
              </button>
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="underline font-semibold">
                  Register here.
                </Link>
              </p>
            </div>
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

export default LoginForm;
