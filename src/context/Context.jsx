import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const contextProvider = (props) => {
  const onSent = async (prompt) => {
    await runChat(prompt);
  };

  onSent("What is react js");
  const contextValue = {};

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default contextProvider;
