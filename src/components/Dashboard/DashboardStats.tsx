import React from "react";
import { Project } from "../../Types/api";

interface DashboardStatsProps {
  projects: Project[];
}

const DashBoardStats: React.FC<DashboardStatsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-2">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 text-2xl">
            📊
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-500">
              Active Projects
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {
                projects.filter((p) => {
                  const now = new Date();
                  const start = new Date(p.startDate);
                  const end = new Date(p.endDate);
                  return now >= start && now <= end;
                }).length
              }
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600 text-2xl">
            ✅
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-500">Total Tasks</div>
            <div className="text-2xl font-bold text-gray-900">
              {projects.reduce(
                (total, project) => total + (project.tasks?.length || 0),
                0
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600 text-2xl">
            ⏰
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-500">This Month</div>
            <div className="text-2xl font-bold text-gray-900">
              {
                projects.filter((p) => {
                  const end = new Date(p.endDate);
                  const now = new Date();
                  return (
                    end.getMonth() === now.getMonth() &&
                    end.getFullYear() === now.getFullYear()
                  );
                }).length
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoardStats;