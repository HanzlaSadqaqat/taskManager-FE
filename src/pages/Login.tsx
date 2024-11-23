// src/components/Login.js
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AxiosError } from "axios";
import { AppContextData } from "../context/AppContext";
import { authApi } from "../services/authService";
import GoogleButton from "../components/GoogleButton";
import GithubButton from "../components/GithubButton";

const Login = () => {
  const { setLoggedIn, setEmail } = useContext(AppContextData);
  const [email, setUserEmail] = useState("");
  const [isError, setIsError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authApi.login({
        email,
        password,
      });
      if (response) {
        setLoggedIn!(true);
        setEmail!(email);
        navigate("/", { replace: true });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log("err", err);
      setIsError(`${err.response?.data}`);
    }
  };
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_PUBLIC_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  const githubAuth = () => {
    window.open(
      `${import.meta.env.VITE_PUBLIC_API_URL}/auth/github/callback`,
      "_self"
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl bold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 border p-20 shadow-sm"
          onSubmit={handleLogin}
        >
          <div className="rounded-md shadow-sm flex flex-col gap-3">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={email}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {isError ? (
            <div className="bg-red-200 text-red-950 flex justify-center p-1 text-center text-sm">
              {isError}
            </div>
          ) : (
            <div></div>
          )}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-white  hover:bg-white hover:text-black transition duration-300 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
          <div className="flex gap-2 flex-col">
            <GoogleButton onClick={googleAuth} />
            <GithubButton onClick={githubAuth} />
          </div>
          <div className="relative top-5">
            Don't have an account yet?
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              {" Signup"}
            </Link>
            <Link
              to={`${import.meta.env.VITE_PUBLIC_API_URL}/auth/github/callback`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              {" Signup with Github"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
