import axios from "axios";
import { Task } from "../Types/api";
const API_URL = "http://localhost:5248";


export async function GetUserTasks(): Promise<Task[]> {
  const response = await axios.get<Task[]>(`${API_URL}/api/Task/GetAllUserTasks` );
  return response.data;
}