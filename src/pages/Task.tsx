import React, { useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ToggleBar } from "../components/ToggleBar";
import { AppContextData } from "../context/AppContext";

const Task: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { email } = useContext(AppContextData);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/task", {
        title,
        description,
        email,
      });
      navigate("/task");
    } catch (error) {
      const err = error as AxiosError;
      const message = err.response?.data;
      console.log(message);
    }
  };

  return (
    <div className="h-screen">
      <div className=" absolute w-full">
        <ToggleBar />
      </div>
      <div className="bg-gray-100 h-full flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter task title"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-semibold"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter task description"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 rounded-md border w-full text-white  hover:bg-white hover:text-black transition duration-300 bg-blue-500 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Task;
