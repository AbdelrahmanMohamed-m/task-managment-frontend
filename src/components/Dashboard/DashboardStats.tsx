import React from "react";
import { Badge } from "../UniversalCompnents/Badge";
import { Card, CardContent } from "../LandingPage Compnents/Card";
import { Calendar, CheckCircle2, FolderPlus, TrendingUp } from "lucide-react";

interface DashboardStatsProps {
  projects: number;
  taskscompleted?: number;
  totalTasks?: number;
  tasksThismonth?: number;
}

const DashBoardStats: React.FC<DashboardStatsProps> = ({
  projects,
  taskscompleted,
  totalTasks,
  tasksThismonth,
}) => {
  return (
    <div className="w-full mx-auto space-y-2 sm:px-6 md:px-8 lg:px-20 xl:pr-24">
      {/* Header with Dashboard title and Total Projects on same line */}
      <div className="flex items-center justify-between w-full ">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Total Projects</span>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {projects}
          </Badge>
        </div>
      </div>
      {/* Welcome paragraph on its own line */}
      <p className="text-gray-600 text-left text-sm ">
        Welcome back! Here's what's happening with your projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Projects</p>
                <p className="text-3xl font-bold text-gray-900 text-left">
                  {projects}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FolderPlus className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Tasks</p>
                <p className="text-3xl font-bold text-gray-900 text-left">
                  {totalTasks}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed Tasks</p>
                <p className="text-3xl font-bold text-gray-900 text-left">
                  {taskscompleted}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">This Month</p>
                <p className="text-3xl font-bold text-gray-900 text-left">
                  {tasksThismonth}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default DashBoardStats;
