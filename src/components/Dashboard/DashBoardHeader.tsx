
import React from "react";

interface DashBoardheaderProps{
    totalProjects:number;
}


const DashboardHeader: React.FC<DashBoardheaderProps> = ({ totalProjects }) => {

 return(
     <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <span className="text-4xl mr-3">🎯</span>
              Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Welcome back! Here's what's happening with your projects.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm text-gray-500">Total Projects</div>
              <div className="text-2xl font-bold text-blue-600">
                {totalProjects}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default DashboardHeader
