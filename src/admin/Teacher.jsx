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

const Teacher = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    subject: "",
    email: "",
  });

  const [teachers, setTeachers] = useState([]);

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!teacher.name || !teacher.subject || !teacher.email || !teacher.phone)  return;

    setTeachers([
      { ...teacher, id: Date.now() },
      ...teachers,
    ]);

    setTeacher ({
      name: "",
      phone: "",
      subject: "",
      email: "",
    })
      

  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
       <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Add Teacher</h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Teacher Name"
            value={teacher.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={teacher.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>
          <input
              type="phone"
              name="phone"
              placeholder="phone"
              value={teacher.phone}
              onChange={handleChange}
              className="border px-4 py-2 rounded-lg"/>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={teacher.subject}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>
          <input
            type="password"
            name="temporary"
            placeholder="Temporary password"
            value={teacher.password}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>
          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg hover:bg-green-700">
            Add Teacher
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Teacher List</h3>

        {teachers.length === 0 ? (
          <p className="text-gray-500">No teachers added yet.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">phone</th>
                <th className="p-3">Subject</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.Email}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.subject}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteTeacher(item.id)}
                      className="text-red-500 hover:text-red-700">
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



export default Teacher;