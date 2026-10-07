import { createContext, useContext } from "react";
export const ProjectsContext = createContext();
export const useAppData = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("context is missing!");
  }
  return context;
};
