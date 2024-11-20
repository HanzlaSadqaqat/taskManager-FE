import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
interface CardProps {
  title: string;
  description: string;
  getTaskDetail: () => void;
  _id: string;
  //   onEditClick?: () => void; // Function to handle the edit button click
  //   onDeleteClick?: () => void; // Function to handle the delete button click
}

const TaskDetailCard: React.FC<CardProps> = (props: CardProps) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  // const [id, setId] = useState(props._id);
  useEffect(() => {
    setTitle(props.title);
    setDescription(props.description);
  }, [edit]);

  const handleUpdate = async (id: string) => {
    setEdit(false);
    try {
      console.log(id);
      const response = await axios.patch(`/task/update`, {
        title,
        description,
        id,
      });
      if (response) {
        props.getTaskDetail();
      }
      console.log(response.data);
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data);
    }
  };
  const handleEdit = () => {
    setEdit(true);
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/task/delete/${props._id}`);
      if (response) {
        setDescription(props.description);
        setTitle(props.title);
        props.getTaskDetail();
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data);
    }
  };

  return (
    <>
      {" "}
      {edit ? (
        <div className="bg-white p-4 rounded-lg shadow-md m-2 flex justify-between w-4/5 items-center gap-4">
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2"
            />
            <textarea
              value={description}
              //   rows={2}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2"
            />
          </div>
          <div className="mt-4 flex gap-2">
            <button
              className="px-3 py-1 hover:text-white border hover:b-500 text-black hover:bg-blue-600 focus:outline-none transition duration-300 "
              onClick={(e) => {
                e.preventDefault();
                handleUpdate(props._id);
              }}
            >
              Save
            </button>

            {/* <button className="px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500 focus:outline-none">
              Delete
            </button> */}
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md m-2 flex justify-between w-4/5 items-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
            <p className="text-gray-600">{props.description}</p>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              className="px-3 py-1 hover:text-white border w- text-black hover:bg-blue-600 focus:outline-none transition duration-300 "
              onClick={(e) => {
                e.preventDefault();
                handleEdit();
              }}
            >
              Edit
            </button>

            <button
              className="px-3 py-1 hover:text-white border hover:bg-red-500 text-black focus:outline-none transition duration-300 "
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskDetailCard;
