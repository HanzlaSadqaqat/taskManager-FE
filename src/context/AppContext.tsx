import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface AppContextProps {
  loggedIn: boolean;
  email: string;
  setLoggedIn: Dispatch<SetStateAction<boolean>> | null;
  setEmail: Dispatch<SetStateAction<string>> | null;
}

export let AppContextData = createContext<AppContextProps>({
  loggedIn: false,
  email: "",
  setLoggedIn: null,
  setEmail: null,
});

export const AppContext = (props: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <AppContextData.Provider
      value={{
        loggedIn,
        email,
        setLoggedIn,
        setEmail,
      }}
    >
      {props.children}
    </AppContextData.Provider>
  );
};
