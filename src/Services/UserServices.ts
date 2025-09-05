import axios from "axios";
import { User } from "../Types/api";

const API_URL = "http://localhost:5248";

export async function GetuserInfo(username:String): Promise<User> {
  const response = await axios.get<User>(`${API_URL}/api/auth/Profile`, { params: { username } });
  return response.data;
}
