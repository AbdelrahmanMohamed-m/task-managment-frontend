import React from "react";
import { Project } from "../../Types/api";

interface DashboardCardProp {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  getProjectStatus: (startDate: string , endDate: string ) => {status: string; color: string; icon: React.ReactNode;};
}

const DashboardCard: React.FC<DashboardCardProp> = ({
  projects,
  onProjectClick,
  getProjectStatus,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        const projectStatus = getProjectStatus(
          project.startDate,
          project.endDate
        );
        return (
          <div
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.name}
              </h3>
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${projectStatus.color} flex items-center`}
              >
                <span className="mr-1">{projectStatus.icon}</span>
                {projectStatus.status}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-xs text-gray-500">
                <span className="mr-2">📅</span>
                <span className="font-medium">Start:</span>
                <span className="ml-1">
                  {new Date(project.startDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span className="mr-2">🏁</span>
                <span className="font-medium">End:</span>
                <span className="ml-1">
                  {new Date(project.endDate).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-blue-600">
                <span className="mr-1">📋</span>
                <span className="font-medium">
                  {project.tasks?.length || 0}
                </span>
                <span className="ml-1">tasks</span>
              </div>
              <div className="text-blue-600 group-hover:text-blue-800 text-sm font-medium">
                View Details →
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DashboardCard;