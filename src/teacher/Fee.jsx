import React, {  } from "react";
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

const Fee = () => {

  return (
    

      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold">Student Fees</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow">
                <p className="text-gray-500 text-sm">Total Students</p>
                <h3 className="text-2xl font-bold mt-2">30</h3>
              </div>
              <div className="bg-white p-5 rounded-xl shadow">
                <p className="text-gray-500 text-sm">Total Collected</p>
                <h3 className="text-2xl font-bold mt-2 text-green-600">₹12,000</h3>
              </div>
              <div className="bg-white p-5 rounded-xl shadow">
                <p className="text-gray-500 text-sm">Pending Amount</p>
                <h3 className="text-2xl font-bold mt-2 text-red-600">₹3,500</h3>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="text-lg font-semibold">Class 10-A Fees</h3>
                <select className="border px-4 py-2 rounded-lg w-full md:w-60">
                  <option>Class 10-A</option>
                  <option>Class 9-B</option>
                  <option>Class 8-C</option>
                </select>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-sm font-semibold">Roll No</th>
                    <th className="p-4 text-sm font-semibold">Student Name</th>
                    <th className="p-4 text-sm font-semibold">Total Fee</th>
                    <th className="p-4 text-sm font-semibold">Paid</th>
                    <th className="p-4 text-sm font-semibold">Due</th>
                    <th className="p-4 text-sm font-semibold text-center">Status</th>
                    <th className="p-4 text-sm font-semibold text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, roll: 1, name: "siva", total: 500, paid: 500 },
                    { id: 2, roll: 2, name: "kumar", total: 500, paid: 300 },
                    { id: 3, roll: 3, name: "Michael", total: 500, paid: 0 },
                  ].map((student) => {
                    const due = student.total - student.paid;

                    return (
                      <tr key={student.id} className="border-t">
                        <td className="p-4">{student.roll}</td>
                        <td className="p-4">{student.name}</td>
                        <td className="p-4">₹{student.total}</td>
                        <td className="p-4 text-green-600">₹{student.paid}</td>
                        <td className="p-4 text-red-600">₹{due}</td>
                        <td className="p-4 text-center">
                          <span
                            className={`px-3 py-1 text-xs rounded-full ${due === 0
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                              }`}
                          >
                            {due === 0 ? "Paid" : "Pending"}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          {due > 0 && (
                            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 text-sm">
                              Pay
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Fee;

