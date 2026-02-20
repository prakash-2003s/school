import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const Homework = () => {

  const [homework, setHomework] = useState({
    title: "",
    className: "Class 10-A",
    dueDate: "",
  });

  const [homeworks, setHomeworks] = useState([]);

  const handleChange = (e) => {
    setHomework({ ...homework, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setHomeworks([
      { ...homework, id: Date.now(), status: "Pending" },
      ...homeworks,
    ]);

    setHomework({
      title: "",
      className: "Class 10-A",
      dueDate: "",
    });
  };

  const deleteHomework = (id) => {
    setHomeworks(homeworks.filter((item) => item.id !== id));
  };

  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Homework</h2>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">
              Assign Homework
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              <input
                type="text"
                name="title"
                placeholder="Homework Title"
                value={homework.title}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-lg md:col-span-2"
              />

              <select
                name="className"
                value={homework.className}
                onChange={handleChange}
                className="border px-4 py-2 rounded-lg"
              >
                <option>Class 10-A</option>
                <option>Class 9-B</option>
                <option>Class 8-C</option>
              </select>

              <input
                type="date"
                name="dueDate"
                value={homework.dueDate}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-lg"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 md:col-span-4"
              >
                Assign Homework
              </button>
            </form>
          </div>

          <div className="space-y-4">
            {homeworks.length === 0 && (
              <p className="text-gray-500 text-center">
                No homework assigned.
              </p>
            )}

            {homeworks.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
              >
                <div>
                  <h4 className="font-semibold text-lg">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.className} • Due: {item.dueDate}
                  </p>

                  <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
                    {item.status}
                  </span>
                </div>

                <button
                  onClick={() => deleteHomework(item.id)}
                  className="text-red-500 hover:text-red-700"
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

export default Homework;
