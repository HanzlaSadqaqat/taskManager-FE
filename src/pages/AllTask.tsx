import TaskDetailCard from "../components/TaskDetailCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToggleBar } from "../components/ToggleBar";
import { AppContextData } from "../context/AppContext";
interface getTaskData {
  title: string;
  description: string;
  email: string;
  _id: string;
}

export default function AllTask() {
  const [userTask, setUserTask] = useState<getTaskData[]>([]);
  const { email } = useContext(AppContextData);
  useEffect(() => {
    getTaskDetail();
  }, []);
  const getTaskDetail = async () => {
    try {
      const response = await axios.get("/task/detail");
      const taskResponse = response.data.filter(
        (data: getTaskData) => data.email === email
      );
      setUserTask(taskResponse);
    } catch (error) {}
  };
  return (
    <div className="bg-gray-100 h-screen absolute w-screen">
      <div className="w-full">
        <ToggleBar />
      </div>
      {userTask.map((data: getTaskData) => {
        return (
          <div className="flex justify-center">
            <TaskDetailCard
              title={data.title}
              getTaskDetail={getTaskDetail}
              description={data.description}
              _id={`${data._id}`}
            />
          </div>
        );
      })}
    </div>
  );
}
