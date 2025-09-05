import React from "react";
import { Project } from "../../Types/api";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Filter,
  FolderPlus,
  MoreVertical,
  Plus,
  Users,
} from "lucide-react";
import { Button } from "../LandingPage Compnents/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../LandingPage Compnents/Card";
import { Badge } from "../UniversalCompnents/Badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../UniversalCompnents/DropDownMenu";
import { Progress } from "../UniversalCompnents/Progress";

interface DashboardProjectsSectionProps {
  projects: Project[];
  onNewProjectClick: () => void;
  onProjectClick: (project: Project) => void;
  searchQuery?: string;
  handleCreateProject?: () => void;
  filteredProjects?: Project[];
}

const DashBoardProjectsSection: React.FC<DashboardProjectsSectionProps> = ({
  projects,
  onNewProjectClick,
  onProjectClick,
  searchQuery = "",
  handleCreateProject = () => {},
  filteredProjects = projects,
}) => {
  const getProjectStatus = (startDate: string, endDate: string) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start)
      return {
        status: "upcoming",
        color: "bg-blue-100 text-blue-800",
        icon: "📅",
      };
    if (now > end)
      return {
        status: "completed",
        color: "bg-green-100 text-green-800",
        icon: "✅",
      };
    return {
      status: "active",
      color: "bg-orange-100 text-orange-800",
      icon: "🚀",
    };
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between sm:px-6 md:px-8 lg:px-28 xl:pr-32">
        <div className="flex items-center space-x-3">
          <FolderPlus className="w-6 h-6 text-gray-700" />
          <h3 className="text-xl font-bold text-gray-900">Your Projects</h3>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className=" px-4 py-5 text-sm sm:text-base flex items-center hover:bg-gray-100"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-5 text-sm sm:text-base flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardProjectsSection;
