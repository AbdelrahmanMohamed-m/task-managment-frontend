import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { User, LoginDto, RegisterDto } from "../Types/api";

// Define what our context will provide
interface AuthContextType {
  user: User | null;
  // so credentials in a prarmeter for login
  login: (credentials: LoginDto) => Promise<void>;
  register: (userData: RegisterDto) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component props
interface AuthProviderProps {
  children: ReactNode;
}

// Provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in when app starts
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
      // Set default authorization header for axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginDto) => {
    try {
      const response = await axios.post<User>(
        'http://localhost:5248/api/user/login',
        credentials
      );
      const userData = response.data;

      setUser(userData);
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] =`Bearer ${userData.token}`;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const backendError = error.response?.data;
        console.error("Login failed:", backendError);

        if (Array.isArray(backendError) && backendError[0]?.description) {
          throw new Error(backendError[0].description);
        }

        throw new Error(error.response?.statusText || "Login failed");
      }

      throw new Error("An unexpected error occurred during login");
    }
  };

  const register = async (userData: RegisterDto) => {
    try {
      const response = await axios.post<User>(
        "http://localhost:5248/api/user/register",
        userData
      );
      const newUser = response.data;

      setUser(newUser);
      localStorage.setItem("token", newUser.token);
      localStorage.setItem("user", JSON.stringify(newUser));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newUser.token}`;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const backendError = error.response?.data;
        console.error("Registration failed:", backendError);

        if (Array.isArray(backendError) && backendError[0]?.description) {
          throw new Error(backendError[0].description);
        }

        throw new Error(error.response?.statusText || "Registration failed");
      }

      throw new Error("An unexpected error occurred");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
