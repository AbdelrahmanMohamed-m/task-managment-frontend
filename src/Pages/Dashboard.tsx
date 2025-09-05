import { useState, useEffect } from "react";
import { useUserTasks } from "../Hooks/UserTasksHook";
import { Project } from "../Types/api";
import { useAuth } from "../Context/AuthContext";
import DashboardHeader from "../components/Dashboard/DashBoardHeader";
import DashBoardStats from "../components/Dashboard/DashboardStats";
import DashBoardProjectsSection from "../components/Dashboard/DashBoardProjectsSection";
import { useProjects } from "../Hooks/projectsHook";

const Dashboard = () => {
  // Data
  const { projects, isLoading, error, fetchProjects, deleteProject } =
    useProjects();

  // filter for the tasks
  const {
    tasks,
    isLoading: tasksLoading,
    error: tasksError,
    fetchTasks,
  } = useUserTasks();

  const completedCount = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  //tasks this month
  const currentMonth = new Date().getMonth();
  const tasksThisMonth = tasks.filter((task) => {
    const taskDate = new Date(task.createdAt);
    return taskDate.getMonth() === currentMonth;
  }).length;
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  // handlers
  const openCreate = () => setIsCreateOpen(true);
  const closeCreate = () => setIsCreateOpen(false);
  const handleProjectClick = (ProjectData: Project) => {
    setSelectedProject(ProjectData);
    setIsDetailsOpen(true);
  };
  const { user, logout } = useAuth();
  // log out function
  const closeDetails = () => {
    setIsDetailsOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-lg text-gray-600">Loading your projects...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <div className="text-red-500 text-6xl mb-4 text-center">⚠️</div>
          <div className="text-red-700 text-center font-semibold">{error}</div>
          <button
            onClick={fetchProjects}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" min-h-screen bg-gray-50">
      <DashboardHeader
        username={user?.userName}
        Logout={logout}
      ></DashboardHeader>
      {/* Main Content */}
      <main className="p-6">
        <DashBoardStats
          projects={projects.length}
          tasksThismonth={tasksThisMonth}
          totalTasks={tasks.length}
          taskscompleted={completedCount}
        ></DashBoardStats>
      </main>
      {/* Projects Section */}
      <DashBoardProjectsSection
          projects={projects}
          onNewProjectClick={openCreate}
          onProjectClick={handleProjectClick}
        />

      {/* Enhanced Modal */}
      {/* {isDetailsOpen && selectedProject && (
          <DashboardDetailModal selectedProject={selectedProject} closeDetails={closeDetails} DeleteProject={deleteProject}></DashboardDetailModal>
        )}
      </div> */}
    </div>
  );
};

export default Dashboard;
