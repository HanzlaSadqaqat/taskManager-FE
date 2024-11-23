import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useState } from "react";
import { authApi } from "../services/authService";
export const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await axios.post("/auth/signup", {

      // });
      await authApi.signup({
        name,
        email,
        password,
        conformPassword,
      });
      navigate("/login");
    } catch (error) {
      const err = error as AxiosError;
      setIsError(`${err.response?.data}`);
    }
  };
  return (
    <div className="flex flex-col h-screen w-full border justify-center items-center">
      <form className="w-2/6 border p-10 shadow-sm" onSubmit={handleSignup}>
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="conformPassword"
            name="conformPassword"
            placeholder="Conform Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            value={conformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
            required
          />
        </div>
        {isError ? (
          <div className="bg-red-200 text-red-950 flex justify-center p-1 text-center text-sm">
            {isError}
          </div>
        ) : (
          <div></div>
        )}
        <div className="text-center w-full">
          <button
            type="submit"
            className="px-4 py-2 w-full  rounded-md text-white border hover:bg-white hover:text-black transition duration-300 bg-blue-500 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Sign Up
          </button>
        </div>
        <div className="relative top-5  ">
          If you already have an account.
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 font-semibold hover"
          >
            {" Login"}
          </Link>
        </div>
      </form>
    </div>
  );
};
