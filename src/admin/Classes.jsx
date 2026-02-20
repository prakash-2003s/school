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

const Classes = () => {
  const [classData, setClassData] = useState({
    className: "",
    section: "",
    teacher: "",
  });

  const [classes, setClasses] = useState([]);

  const handleChange = (e) => {
    setClassData({ ...classData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!classData.className || !classData.section || !classData.teacher)
      return;

    setClasses([{ ...classData, id: Date.now() }, ...classes]);
    setClassData({ className: "", section: "", teacher: "" });
  };

  const deleteClass = (id) => {
    setClasses(classes.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <h3 className="font-semibold mb-4">Add New Class</h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <input
            type="text"
            name="className"
            placeholder="Class (e.g. 10)"
            value={classData.className}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />
          <input
            type="text"
            name="section"
            placeholder="Section (A / B / C)"
            value={classData.section}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />
          <input
            type="text"
            name="teacher"
            placeholder="Class Teacher"
            value={classData.teacher}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 w-full"
          >
            Add Class
          </button>
        </form>
      </div>
      <div className="bg-white rounded-2xl shadow p-4 md:p-6">
        <h3 className="font-semibold mb-4">Class List</h3>
        {classes.length === 0 ? (
          <p className="text-gray-500">No classes created yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-150">
              <thead>
                <tr className="border-b">
                  <th className="p-3">Class</th>
                  <th className="p-3">Section</th>
                  <th className="p-3">Teacher</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">{item.className}</td>
                    <td className="p-3">{item.section}</td>
                    <td className="p-3">{item.teacher}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => deleteClass(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};


export default Classes;
