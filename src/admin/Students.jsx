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

const Students = () => {
  const [student, setStudent] = useState({
    name: "",
    className: "",
    roll: "",
    section: "",
    email: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.roll) return;

    setStudents([{ ...student, id: Date.now() }, ...students]);

    setStudent({
      name: "",
      className: "",
      roll: "",
      section: "",
      email: "",
    });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Add Student</h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>

          <input
            type="text"
            name="roll"
            placeholder="Roll Number"
            value={student.roll}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>

          <input
            type="text"
            name="className"
            placeholder="Class"
            value={student.className}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>

          <input
            type="text"
            name="section"
            placeholder="Section"
            value={student.section}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>

          <input
            type="email"
            name="email"
            placeholder="Parent Email"
            value={student.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>

          <div className="col-span-1 md:col-span-4 flex justify-center md:justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 px-6 py-2 w-full md:w-auto">
              Add Student
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Student List</h3>

        {students.length === 0 ? (
          <p className="text-gray-500">No students added yet.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Roll</th>
                <th className="p-3">Name</th>
                <th className="p-3">Class</th>
                <th className="p-3">Section</th>
                <th className="p-3">Email</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.roll}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.className}</td>
                  <td className="p-3">{item.section}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteStudent(item.id)}
                      className="text-red-500 hover:text-red-700" >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Students;