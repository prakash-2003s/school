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

const Notices = () => {
  const [notice, setNotice] = useState({
    title: "",
    message: "",
    priority: "General",
    files: [],
  });

  const [notices, setNotices] = useState([]);

  const handleChange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setNotice({ ...notice, files: selectedFiles });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notice.title || !notice.message) return;

    const newNotice = {
      ...notice,
      id: Date.now(),
    };

    setNotices([newNotice, ...notices]);

    setNotice({
      title: "",
      message: "",
      priority: "General",
      files: [],
    });
  };

  const deleteNotice = (id) => {
    setNotices(notices.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6 p-4">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Create Notice</h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4" >
          <input
            type="text"
            name="title"
            placeholder="Notice Title"
            value={notice.title}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg md:col-span-2 w-full"/>
          <select
            name="priority"
            value={notice.priority}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg w-full">
            <option value="General">General</option>
            <option value="Fee">Fee</option>
            <option value="Exam">Exam</option>
            <option value="Holiday">Holiday</option>
            <option value="Event">Event</option>
            <option value="Urgent">Urgent</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 px-4">
            Publish
          </button>

          <textarea
            name="message"
            placeholder="Notice Message"
            value={notice.message}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg md:col-span-4 resize-none w-full"
            rows="3"/>
          <div className="md:col-span-4">
            <label className="block text-sm font-medium mb-1">
              Attach Files
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="border px-4 py-2 rounded-lg w-full"/>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Notice List</h3>

        {notices.length === 0 ? (
          <p className="text-gray-500">No notices published yet.</p>
        ) : (
          <div className="space-y-4">
            {notices.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col md:flex-row md:justify-between gap-4"
              >
                <div className="flex-1">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.message}
                  </p>

                  <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                    {item.priority}
                  </span>

                  {item.files && item.files.length > 0 && (
                    <div className="mt-3 space-y-1">
                      <p className="text-xs font-medium text-gray-500">
                        Attachments:
                      </p>
                      {item.files.map((file, index) => (
                        <p
                          key={index}
                          className="text-sm text-blue-600 break-all"
                        >
                          📎 {file.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => deleteNotice(item.id)}
                  className="text-red-500 hover:text-red-700 self-start">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notices;