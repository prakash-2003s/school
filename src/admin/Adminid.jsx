import React, { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  Bell,
  FileText,
  User,
  LogOut,
  Trash2,
} from "lucide-react";

const Adminid = () => {
  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@school.com",
    phone: "123-456-7890",
    role: "Administrator",
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <User size={40} className="text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold">{admin.name}</h3>
          <p className="text-sm text-gray-500">{admin.role}</p>
          <p className="text-sm text-gray-500 mt-1">{admin.email}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={admin.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={admin.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="text"
                name="phone"
                value={admin.phone}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Role</label>
              <input
                type="text"
                name="role"
                value={admin.role}
                disabled
                className="w-full border px-4 py-2 rounded-lg mt-1 bg-gray-100"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adminid;
