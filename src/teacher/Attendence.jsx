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

const Attendence = () => {

  return (
    
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Mark Attendance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Class
            </label>
                <select className="w-full border px-4 py-2 rounded-lg">
                  <option>Class 12</option>
                  <option>Class 11</option>
                  <option>Class 10</option>
                  <option>Class 9</option>
                  <option>Class 8</option>
                  <option>Class 7</option>
                  <option>Class 6</option>
                  <option>Class 5</option>
                  <option>Class 4</option>
                  <option>Class 3</option>
                  <option>Class 2</option>
                  <option>Class 1</option>
                </select>
              </div>
              <div>
              <label className="block text-sm text-gray-600 mb-1">
                section
              </label>
                <select className="w-full border px-4 py-2 rounded-lg">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  <option>E</option>
                  <option>F</option>
                  <option>G</option>
                </select>  
                <label className="block text-sm text-gray-600 mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-700">
                comf
              </button>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Attendence;
