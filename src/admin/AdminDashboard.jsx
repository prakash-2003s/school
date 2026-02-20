import React, {  } from "react";
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

const AdminDashboard = () => {

  return (

      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Students" value="1,240" />
            <StatCard title="Total Teachers" value="85" />
            <StatCard title="Total Classes" value="36" />
            <StatCard title="Total Revenue" value="$54,200" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <ActivityItem text="New student added in Class 10-A" />
              <ActivityItem text="Fee payment received from John Doe" />
              <ActivityItem text="Teacher assigned to Class 8-C" />
              <ActivityItem text="New notice published" />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">System Overview</h3>
              <OverviewItem label="Attendance Rate" value="95%" color="text-blue-600" />
              <OverviewItem label="Fee Collection" value="92%" color="text-green-600" />
              <OverviewItem label="Active Classes" value="36" color="text-purple-600" />
            </div>
          <Outlet />
          </div>
        </main>
      </div>
  );
};

export default AdminDashboard;

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition ${
      active ? "bg-gray-700" : "hover:bg-gray-800"
    }`}
  >
 {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <p className="text-gray-500 text-sm">{title}</p>
    <h4 className="text-2xl font-bold mt-2">{value}</h4>
  </div>
);

const ActivityItem = ({ text }) => (
  <div className="border rounded-lg p-3 mb-3 text-sm text-gray-600">
    {text}
  </div>
);

const OverviewItem = ({ label, value, color }) => (
  <div className="flex justify-between items-center mb-3">
    <span className="text-sm text-gray-500">{label}</span>
    <span className={`font-semibold ${color}`}>{value}</span>
  </div>
);