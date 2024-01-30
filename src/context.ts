import { createContext, useContext } from "react";

import { MyContextProps } from "./App";

export const MyContext = createContext<MyContextProps | undefined>(undefined);

export function useUserContext() {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error("useUserContext must be used with a MyContext");
  }

  return context;
}
