import React, { useState } from "react";
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
  Trash2,
} from "lucide-react";

const Notice = () => {
  const [notice, setNotice] = useState({
    title: "",
    message: "",
    priority: "Medium",
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

    setNotices([{ ...notice, id: Date.now() }, ...notices]);

    setNotice({
      title: "",
      message: "",
      priority: "Medium",
      files: [],
    });
  };

  const deleteNotice = (id) => {
    setNotices(notices.filter((item) => item.id !== id));
  };

  return (
    
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="lg:hidden bg-white p-4 shadow flex items-center">
          
          <h2 className="ml-4 font-semibold">Notices</h2>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="bg-white shadow rounded-xl p-6 h-fit">
              <h2 className="text-xl font-bold mb-4">Create Notice</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Notice Title"
                  value={notice.title}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-2 rounded-lg"
                />

                <textarea
                  name="message"
                  placeholder="Notice Message"
                  value={notice.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full border px-4 py-2 rounded-lg resize-none"
                />

                <select
                  name="priority"
                  value={notice.priority}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-lg"
                >
                  <option value="General">General</option>
                  <option value="Important">Important</option>
                  <option value="Urgent">Urgent</option>
                </select>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="w-full border px-4 py-2 rounded-lg"
                />

                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
                  Publish Notice
                </button>
              </form>
            </div>
            <div className="space-y-4">
              {notices.length === 0 && (
                <p className="text-gray-500 text-center mt-10">
                  No notices available.
                </p>
              )}

              {notices.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl shadow flex flex-col md:flex-row md:justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.message}
                    </p>

                    {item.files && item.files.length > 0 && (
                      <div className="mt-3 space-y-1">
                        <p className="text-xs font-semibold text-gray-500">
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

                    <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                      {item.priority}
                    </span>
                  </div>

                  <button
                    onClick={() => deleteNotice(item.id)}
                    className="text-red-500 hover:text-red-700 self-start"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
  );
};



export default Notice;
