// import { useState } from "react";

import { useContext } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { AppContextData } from "./context/AppContext";
import { router } from "./router/Routers";

const App = () => {
  const { loggedIn } = useContext(AppContextData);
  return useRoutes(router(loggedIn));
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
export default AppWrapper;
