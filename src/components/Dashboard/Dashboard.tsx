import { useState, useEffect } from "react";
import { Project } from "../../Types/api";
import CreateProjectModal from "./CreateProjectModal";
import DashboardHeader from "./DashBoardHeader";
import DashBoardStats from "./DashboardStats";
import { useProjects } from "../../Hooks/projectsHook";
import DashBoardProjectsSection from "./DashBoardProjectsSection";
import DashboardDetailModal from "./DashboardDetailModal";

const Dashboard = () => {
  // Data
  const { projects, isLoading, error, fetchProjects , deleteProject} = useProjects();

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
const closeDetails = () => {
  setIsDetailsOpen(false);
  setSelectedProject(null); // optional cleanup
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <DashboardHeader totalProjects={projects.length}></DashboardHeader>
      {/* Main Content */}

      <div>
        {/* Create Project button  */}
        <CreateProjectModal
          isOpen={isCreateOpen}
          onClose={closeCreate}
          onProjectCreated={fetchProjects}
        />

        {/* stats area  */}
        <DashBoardStats projects={projects}></DashBoardStats>

        {/* Projects Section */}
        <DashBoardProjectsSection
          projects={projects}
          onNewProjectClick={openCreate}
          onProjectClick={handleProjectClick}
        />

        {/* Enhanced Modal */}
        {isDetailsOpen && selectedProject && (
          <DashboardDetailModal selectedProject={selectedProject} closeDetails={closeDetails} DeleteProject={deleteProject}></DashboardDetailModal>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
