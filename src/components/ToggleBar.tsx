import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContextData } from "../context/AppContext";
export const ToggleBar = () => {
  const { setLoggedIn } = useContext(AppContextData);
  return (
    <div className="flex justify-center mt-5">
      <div className="flex rounded-full bg-white">
        <Link
          to={"/"}
          className="p-4 border hover:bg-blue-400 rounded-full hover:text-white transition duration-300 w-32 flex justify-center"
        >
          Add Task
        </Link>
        <Link
          to={"/task"}
          className="p-4 hover:bg-blue-400 rounded-full hover:text-white transition duration-300 w-32 flex justify-center"
        >
          Tasks
        </Link>
      </div>
      <div className="flex border absolute right-10">
        <button className="" onClick={() => setLoggedIn!(false)}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
};
