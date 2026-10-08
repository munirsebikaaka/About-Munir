import { useEffect, useState } from "react";
import { ProjectsContext } from "./useAppData";
import { fetchData } from "../api/data";
import { getFriendlyErrorMessage } from "../utils/errorMessages";
import { useAuth } from "./useAuthData";

const ProjectsProvider = ({ children }) => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [dataUserId, setDataUserId] = useState(null);
  const [errorUserId, setErrorUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.idToken) return;

    let cancelled = false;
    const fetchProjectsData = async () => {
      setLoading(true);
      try {
        const fetchedProjects = await fetchData("projects", user.idToken);
        const fetchedUsers = await fetchData("users", user.idToken);
        if (!cancelled) {
          setProjects(fetchedProjects);
          setUsers(fetchedUsers);
          setDataUserId(user.id);
          setError("");
          setErrorUserId(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(getFriendlyErrorMessage(err, "fetch"));
          setErrorUserId(user.id);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchProjectsData();

    return () => {
      cancelled = true;
    };
  }, [user?.id, user?.idToken]);

  const hasSession = Boolean(user?.idToken);
  const hasCurrentUserData = hasSession && dataUserId === user.id;
  const values = {
    projects: hasCurrentUserData ? projects : [],
    error: hasSession && errorUserId === user.id ? error : "",
    loading: hasSession && loading,
    users: hasCurrentUserData ? users : [],
  };
  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
