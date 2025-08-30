import { useState, useEffect } from "react";
import { Project } from "../Types/api";
import { DeleteProject, getAllProjects } from "../Services/ProjectServices";

export function useProjects(autoFetch: boolean = true) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const data = await getAllProjects();
      setProjects(data);
      setError(""); // clear old errors
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProject = async (id: number) => {
    try {
      setIsLoading(true);
      await DeleteProject(id);
      // remove locally so UI updates immediately
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {

      console.error("Error deleting project:", err);

      setError("Failed to delete project");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (autoFetch) fetchProjects();
  }, []);

  return { projects, isLoading, error, fetchProjects, deleteProject };
}
