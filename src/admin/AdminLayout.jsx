import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
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
} from "lucide-react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition";

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">
      <aside
        className={`fixed lg:static z-40 top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold">School MS</h1>
          <p className="text-sm text-gray-400">Admin Panel</p>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink to="dash" className={({isActive}) =>
            `${linkClass} ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
          }>
            <LayoutDashboard size={18}/> Dashboard
          </NavLink>

          <NavLink to="students" className={({isActive}) =>
            `${linkClass} ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
          }>
            <Users size={18}/> Students
          </NavLink>

          <NavLink to="teachers" className={({isActive}) =>
            `${linkClass} ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
          }>
            <GraduationCap size={18}/> Teachers
          </NavLink>

          <NavLink to="classes" className={({isActive}) =>
            `${linkClass} ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
          }>
            <BookOpen size={18}/> Classes
          </NavLink>

          <NavLink to="fee" className={({isActive}) =>
            `${linkClass} ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
          }>
            <DollarSign size={18}/> Fees
          </NavLink>

          <NavLink to="notices" className={({isActive}) =>
            `${linkClass} ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
          }>
            <Bell size={18}/> Notices
          </NavLink>

          <NavLink to="reports" className={({isActive}) =>
            `${linkClass} ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
          }>
            <FileText size={18}/> Reports
          </NavLink>

          <NavLink to="id" className={({isActive}) =>
            `${linkClass} ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
          }>
            <User size={18}/> Profile
          </NavLink>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button className="flex items-center gap-2 text-sm text-red-400 hover:text-red-500">
            <LogOut size={18}/> Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4">
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
