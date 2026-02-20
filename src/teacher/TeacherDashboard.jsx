import React from "react";

const TeacherDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Assigned Classes" value="5" />
        <StatCard title="Today's Attendance" value="156/162" />
        <StatCard title="Homework Pending" value="3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Today's Schedule</h3>

          <ScheduleItem
            className="Class 10-A"
            subject="Mathematics"
            time="8:00 AM - 8:45 AM"
            status="Completed"
          />

          <ScheduleItem
            className="Class 9-B"
            subject="Mathematics"
            time="9:00 AM - 9:45 AM"
            status="Completed"
          />

          <ScheduleItem
            className="Class 8-C"
            subject="Mathematics"
            time="10:00 AM - 10:45 AM"
            status="Ongoing"
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Homework Pending Review</h3>

          <HomeworkItem
            title="Chapter 5 Exercises"
            className="Class 10-A"
            due="Jan 8, 2026"
          />

          <HomeworkItem
            title="Trigonometry Problems"
            className="Class 9-B"
            due="Jan 9, 2026"
          />

          <HomeworkItem
            title="Algebra"
            className="Class 8-C"
            due="Jan 10, 2026"
          />
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;


const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <p className="text-gray-500 text-sm">{title}</p>
    <h4 className="text-2xl font-bold mt-2">{value}</h4>
  </div>
);

const ScheduleItem = ({ className, subject, time, status }) => (
  <div className="border rounded-lg p-4 mb-3">
    <h4 className="font-medium">{className}</h4>
    <p className="text-sm text-gray-500">{subject}</p>
    <p className="text-sm text-gray-400">{time}</p>

    <span
      className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
        status === "Completed"
          ? "bg-green-100 text-green-600"
          : "bg-blue-100 text-blue-600"
      }`}
    >
      {status}
    </span>
  </div>
);

const HomeworkItem = ({ title, className, due }) => (
  <div className="border rounded-lg p-4 mb-3">
    <h4 className="font-medium">{title}</h4>
    <p className="text-sm text-gray-500">{className}</p>
    <p className="text-xs text-orange-500 mt-1">Due: {due}</p>

    <button className="mt-3 bg-blue-600 text-white text-xs px-4 py-1 rounded-md hover:bg-blue-700">
      Review
    </button>
  </div>
);
