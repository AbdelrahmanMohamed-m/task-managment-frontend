import React from "react";
import { Project } from "../../Types/api";

interface DashboardDetailModalProps {
  selectedProject: Project;
  closeDetails: () => void;
  DeleteProject: (id: number) => void;
}

const DashboardDetailModal: React.FC<DashboardDetailModalProps> = ({
  selectedProject,
  closeDetails,
  DeleteProject,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white shadow-2xl max-w-lg w-full rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="text-3xl mr-3">📁</span>
              {selectedProject.name}
            </h3>
            <button
              onClick={closeDetails}
              className="text-gray-400 hover:text-gray-600 text-3xl transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">📝</span>Description
            </h4>
            <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
              {selectedProject.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">📅</span>Timeline
            </h4>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-600">
                <span className="font-medium">From:</span>{" "}
                {new Date(selectedProject.startDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">To:</span>{" "}
                {new Date(selectedProject.endDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">📋</span>Tasks
            </h4>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-blue-800 font-medium">
                {selectedProject.tasks?.length || 0} tasks in this project
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-center space-x-2">
          <button
            onClick={closeDetails}
            className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
            Edit Project
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all"
            onClick={() => {
              DeleteProject(selectedProject.id);
              closeDetails();
            }}
          >
            Delete Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetailModal;
