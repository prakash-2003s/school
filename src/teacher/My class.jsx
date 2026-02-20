import React from "react";

const MyClass = () => {
  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">My Classes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                className: "Class 10-A",
                subject: "Mathematics",
                students: 32,
                time: "8:00 AM - 8:45 AM",
              },
              {
                id: 2,
                className: "Class 9-A",
                subject: "Science",
                students: 28,
                time: "9:00 AM - 9:45 AM",
              },
              {
                id: 3,
                className: "Class 8-A",
                subject: "English",
                students: 30,
                time: "10:00 AM - 10:45 AM",
              },
              {
                id: 4,
                className: "Class 10-B",
                subject: "English",
                students: 35,
                time: "11:00 AM - 11:45 AM",
              },
              {
                id: 5,
                className: "Class 9-B",
                subject: "Mathematics",
                students: 27,
                time: "12:00 PM - 12:45 PM",
              },
              {
                id: 6,
                className: "Class 8-B",
                subject: "Science",
                students: 35,
                time: "1:00 PM - 1:45 PM",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">
                  {item.className}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {item.subject}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>👨‍🎓 Students: {item.students}</p>
                  <p>⏰ Time: {item.time}</p>
                </div>

                <div className="mt-5 flex gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                    View Students
                  </button>

                  <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                    View Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyClass;
