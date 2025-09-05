import { Bell, CheckCircle2, LogOut, Search, Settings } from "lucide-react";
import { Button } from "../LandingPage Compnents/button";
import { Input } from "../UniversalCompnents/Input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../UniversalCompnents/DropDownMenu";
import { Avatar, AvatarFallback } from "../UniversalCompnents/Avatar";
import { useNavigate } from "react-router-dom";

interface DashBoardHeaderProps {
  username: string | undefined;
  Logout: () => void;
}
const DashboardHeader = ({ username, Logout }: DashBoardHeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout(); // clears auth state
    navigate("/login"); // redirects to login page
  };

  return (
    <div>
      <header className="bg-white border-b border-gray-200 items-center flex px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className=" w-8  aspect-square bg-blue-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-white w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 ">
                Task Managment system
              </h1>
            </div>
            <nav className="hidden md:flex space-x-3 items-center">
              <Button variant="ghost" className="text-blue-600 bg-blue-50 ">
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-900"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-900"
              >
                Tasks
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                className="pl-10 pr-3 py-2 w-48 md:w-64"
                placeholder="Search..."
                //  value={searchQuery}
                //   onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4 " aria-label="Notifications" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild aria-label="User menu">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>
                      {username?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Welcome, {username}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => {
                    handleLogout();
                  }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
