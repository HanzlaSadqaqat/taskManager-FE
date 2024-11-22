import React from "react";

interface GoogleButtonProps {
  onClick?: () => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 text-black hover:bg-gray-100  border  mt-4  font-medium py-2 px-4 rounded-full shadow-md transition duration-200 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
      >
        <path
          d="M21.35 11.1H12v2.9h5.35c-.25 1.35-.93 2.5-1.96 3.25v2.7h3.16c1.85-1.7 2.9-4.2 2.9-6.95 0-.75-.08-1.48-.22-2.2z"
          fill="#4285F4"
        />
        <path
          d="M12 22c2.4 0 4.41-.8 5.88-2.16l-3.16-2.7c-.88.6-2.02.96-3.22.96-2.48 0-4.58-1.68-5.33-3.95H3.88v2.8C5.35 20.32 8.45 22 12 22z"
          fill="#34A853"
        />
        <path
          d="M6.67 13.15c-.2-.6-.33-1.24-.33-1.9s.13-1.3.33-1.9v-2.8H3.88C3.3 8.25 3 9.1 3 10c0 .9.3 1.75.88 2.55l2.79-2.9z"
          fill="#FBBC05"
        />
        <path
          d="M12 4.98c1.3 0 2.48.45 3.4 1.34l2.56-2.56C16.4 2.34 14.39 1.5 12 1.5 8.45 1.5 5.35 3.2 3.88 6.03l2.79 2.9c.75-2.27 2.85-3.95 5.33-3.95z"
          fill="#EA4335"
        />
      </svg>
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
