import React, {  } from "react";
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

const Reports = () => {
  const monthlyFees = [
    { month: "January", collected: 12000 },
    { month: "February", collected: 15000 },
    { month: "March", collected: 10000 },
    { month: "April", collected: 18000 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ReportCard title="Total Students" value="1,240" />
        <ReportCard title="Total Teachers" value="85" />
        <ReportCard title="Total Classes" value="36" />
        <ReportCard title="Total Revenue" value="$54,200" />
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">
          Monthly Fee Collection
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Month</th>
                <th className="p-3">Collected Amount</th>
              </tr>
            </thead>
            <tbody>
              {monthlyFees.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{item.month}</td>
                  <td className="p-3 text-green-600 font-semibold">
                    ${item.collected}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
        <ul className="space-y-2 text-gray-600">
          <li> Student Growth: <span className="text-green-600 font-semibold">+8% this year</span></li>
          <li> Fee Collection Rate:<span className="text-green-600 font-semibold"> 92%</span></li>
          <li> Average Attendance: <span className="text-green-600 font-semibold">95%</span></li>
          <li> Classes Operating:<span className="text-green-600 font-semibold"> 36 Active</span></li>
        </ul>
      </div>
    </div>
  );
};


const ReportCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <p className="text-gray-500 text-sm">{title}</p>
    <h3 className="text-2xl font-bold mt-2">{value}</h3>
  </div>
);


export default Reports;
