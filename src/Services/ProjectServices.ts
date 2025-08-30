import axios from "axios";
import { Project } from "../Types/api";

const API_URL = "http://localhost:5248";

export async function getAllProjects(): Promise<Project[]> {
  const response = await axios.get<Project[]>(`${API_URL}/api/project/All`);
  return response.data;
}
export async function DeleteProject(id: number): Promise<void> {
  await axios.delete(`${API_URL}/api/project/${id}`);
}