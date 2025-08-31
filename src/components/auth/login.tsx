import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await login(formData);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message); // could show in a toast or <p>{error}</p>
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="flex w-[900px] overflow-hidden rounded-2xl shadow-lg bg-white">
        {/* Left Panel */}
        <div className="flex w-1/2 flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 p-10 text-white">
          <h1 className="mb-4 text-4xl font-bold">Welcome back!</h1>
          <p className="text-lg text-purple-100">
            You can sign in to access your existing account.
          </p>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-1/2 p-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Sign In</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-400"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-400"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <a href="#" className="text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`mt-2 w-full rounded-lg py-2 text-white ${
                isLoading
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            New here?{" "}
            <a href="/register" className="text-purple-600 hover:underline">
              Create an Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
