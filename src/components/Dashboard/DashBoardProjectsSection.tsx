import React from "react";
import { Project } from "../../Types/api";
import DashboardCard from "./DashboardCard";

interface DashboardProjectsSectionProps {
  projects: Project[];
  onNewProjectClick: () => void;
  onProjectClick: (project: Project) => void;
}

const DashBoardProjectsSection: React.FC<DashboardProjectsSectionProps> = ({
  projects,
  onNewProjectClick,
  onProjectClick,
}) => {
  const getProjectStatus = (startDate: string, endDate: string) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start)
      return { status: "upcoming", color: "bg-blue-100 text-blue-800", icon: "📅" };
    if (now > end)
      return { status: "completed", color: "bg-green-100 text-green-800", icon: "✅" };
    return { status: "active", color: "bg-orange-100 text-orange-800", icon: "🚀" };
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <span className="text-2xl mr-2">📁</span>
          Your Projects
        </h2>
        <div className="flex space-x-3">
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md flex items-center"
            onClick={onNewProjectClick}
          >
            <span className="mr-2">➕</span>
            New Project
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No projects yet
            </h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first project!
            </p>
            <button
              onClick={onNewProjectClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Create Your First Project
            </button>
          </div>
        ) : (
          <DashboardCard projects={projects} onProjectClick={onProjectClick} getProjectStatus={getProjectStatus}></DashboardCard>
        )}
      </div>
    </div>
  );
};

export default DashBoardProjectsSection;
