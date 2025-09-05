import { useState, useEffect } from "react";
import { Project, User } from "../Types/api";

import { GetuserInfo } from "../Services/UserServices";
export function useUser(autoFetch: boolean = true) {
  const [User, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

    const fetchUser = async () => {
    try {
      setIsLoading(true);
      const data = await GetuserInfo(User?.userName || "");
      setUser(data)
    }
    catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to fetch user");
        console.log(err);
    } finally {
      setIsLoading(false);
    }
    };
    useEffect(() => {
    if (autoFetch) fetchUser();
    }, []);
    return { User, isLoading, error, fetchUser };
}
  