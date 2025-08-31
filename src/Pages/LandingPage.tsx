import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">TaskFlow</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-sm font-medium hover:text-indigo-600">Login</Link>
          <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <h2 className="text-5xl font-bold mb-4">Work Smarter, Not Harder</h2>
        <p className="text-lg max-w-xl mb-6">
          Manage tasks, collaborate with your team, and hit every deadline—without the chaos.
        </p>
        <Link to="/register" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started Free
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl mb-2">📌</div>
            <h3 className="text-lg font-bold mb-2">Smart Task Management</h3>
            <p>Organize your work with lists, priorities, and deadlines.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">👥</div>
            <h3 className="text-lg font-bold mb-2">Team Collaboration</h3>
            <p>Assign tasks, share updates, and stay aligned in real time.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">📈</div>
            <h3 className="text-lg font-bold mb-2">Progress Tracking</h3>
            <p>Visualize your goals and monitor progress with ease.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TaskFlow. Built for productivity.
      </footer>
    </div>
  );
};

export default LandingPage;
