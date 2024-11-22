import React from "react";

interface GithubButtonProps {
  onClick?: () => void;
}

const GithubButton: React.FC<GithubButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-200 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 .296a12 12 0 0 0-3.794 23.387c.6.111.793-.26.793-.578v-2.176c-3.338.726-4.042-1.609-4.042-1.609a3.175 3.175 0 0 0-1.333-1.753c-1.088-.744.084-.729.084-.729a2.517 2.517 0 0 1 1.835 1.235 2.548 2.548 0 0 0 3.487.996 2.563 2.563 0 0 1 .763-1.61c-2.666-.303-5.467-1.333-5.467-5.927 0-1.308.467-2.379 1.235-3.217a4.509 4.509 0 0 1 .12-3.171s1.007-.323 3.3 1.228a11.374 11.374 0 0 1 6 0c2.293-1.551 3.3-1.228 3.3-1.228a4.507 4.507 0 0 1 .12 3.171 4.506 4.506 0 0 1 1.235 3.217c0 4.607-2.805 5.62-5.48 5.918a2.87 2.87 0 0 1 .84 2.224v3.293c0 .319.19.694.8.577A12 12 0 0 0 12 .296z"
        />
      </svg>
      Sign in with GitHub
    </button>
  );
};

export default GithubButton;
