import { useEffect, useState } from "react";
import { ProjectsContext } from "./useAppData";
import { fetchData } from "../api/data";
import { getFriendlyErrorMessage } from "../utils/errorMessages";

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjectsData = async () => {
      setLoading(true);
      try {
        const fetchedProjects = await fetchData("projects", setError);
        setProjects(fetchedProjects);
        const fetchedUsers = await fetchData("users", setError);
        setUsers(fetchedUsers);
      } catch (err) {
        setError(getFriendlyErrorMessage(err.message, "fetch"));
      } finally {
        setLoading(false);
      }
    };
    fetchProjectsData();
  }, []);

  const values = {
    projects,
    error,
    loading,
    users,
  };
  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
