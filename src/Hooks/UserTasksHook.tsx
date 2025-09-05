import { useState, useEffect } from "react";
import { Task } from "../Types/api";
import { GetUserTasks } from "../Services/UserTasks";
export function useUserTasks(autoFetch: boolean = true) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const data = await GetUserTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to fetch tasks");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (autoFetch) fetchTasks();
  }, []);
  return { tasks, isLoading, error, fetchTasks };
}
