import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
Menu,
X,
LayoutDashboard,
BookOpen,
ClipboardCheck,
FileText,
Bell,
User,
LogOut,
DollarSign,
} from "lucide-react";

const TeacherLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const linkClass = "flex items-center gap-3 px-4 py-2 rounded-lg transition";

    return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">
    <aside
        className={`fixed lg:static z-40 top-0 left-0 h-full w-64 bg-blue-900 text-white transform transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
    >
    <div className="p-6 border-b border-blue-800">
        <h1 className="text-xl font-bold">School MS</h1>
        <p className="text-sm text-blue-300">Teacher Portal</p>
    </div>

        <nav className="p-4 space-y-2">
            <NavLink
            to="dashboard"
            className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-700" : "hover:bg-blue-800"}`
            }
            onClick={() => setSidebarOpen(false)}
        >
            <LayoutDashboard size={18} />
            Dashboard
        </NavLink>

        <NavLink
            to="class"
            className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-700" : "hover:bg-blue-800"}`
            }
            onClick={() => setSidebarOpen(false)}
        >
            <BookOpen size={18} />
            My Classes
        </NavLink>

        <NavLink
            to="attend"
            className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-700" : "hover:bg-blue-800"}`
            }
            onClick={() => setSidebarOpen(false)}
        >
            <ClipboardCheck size={18} />
            Attendance
        </NavLink>

        <NavLink
            to="work"
            className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-700" : "hover:bg-blue-800"}`
            }
            onClick={() => setSidebarOpen(false)}
        >
            <FileText size={18} />
            Homework
        </NavLink>

        <NavLink
            to="fee"
            className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-700" : "hover:bg-blue-800"}`
            }
            onClick={() => setSidebarOpen(false)}
        >
            <DollarSign size={18} />
            Fees
        </NavLink>

        <NavLink
            to="notice"
            className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-700" : "hover:bg-blue-800"}`
            }
            onClick={() => setSidebarOpen(false)}
        >
            <Bell size={18} />
            Notices
        </NavLink>

        <NavLink
            to="profile"
            className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-blue-700" : "hover:bg-blue-800"}`
            }
            onClick={() => setSidebarOpen(false)}
        >
            <User size={18} />
            Profile
        </NavLink>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-blue-800">
        <button className="flex items-center gap-2 text-sm text-red-300 hover:text-red-400">
            <LogOut size={18} />
            Logout
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
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
        <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
        >
            {sidebarOpen ? <X /> : <Menu />}
        </button>
        <h2 className="text-lg font-semibold">Teacher Panel</h2>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
        </main>
    </div>
    </div>
);
};

export default TeacherLayout;
