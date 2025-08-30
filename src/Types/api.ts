// User and Authentication types
export interface User {
  userName: string;
  email: string;
  token: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface RegisterDto {
  username: string;
  email: string;
  password: string;
}

// Project types
export interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
}

export interface CreateProjectDto {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

// Task types
export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  projectId: number;
}

export interface CreateTaskDto {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
}