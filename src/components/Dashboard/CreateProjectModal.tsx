import React, { useState } from "react";
import axios from "axios";

interface CreateProjectModalProps {
  isOpen: Boolean;
  onClose: () => void;
  onProjectCreated?: () => void;
}

export default function CreateProjectModal({isOpen,onClose,onProjectCreated}: CreateProjectModalProps) {
  const [formData, setFormData] = useState({name: "", description: "",startDate: "", endDate: ""});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.startDate > formData.endDate) {
      alert("End date must be later than start date!");
      return;
    }
    const payload = {
      ...formData,
      startDate: new Date(formData.startDate).toISOString(),
      endDate: new Date(formData.startDate).toISOString(),
    };

    try {
      await axios.post("http://localhost:5248/api/project", payload);
      if (onProjectCreated) onClose();
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h2 className="text-lg font-bold mb-4">Create Project</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* name */}
          <div>
            <label className="block mb-1 font-medium">Project Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
