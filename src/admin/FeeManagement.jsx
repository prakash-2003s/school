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

const FeeManagement = () => {
  const [fee, setFee] = useState({
    studentName: "",
    total: "",
    paid: "",
  });

  const [fees, setFees] = useState([]);

  const handleChange = (e) => {
    setFee({ ...fee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fee.studentName || !fee.total || !fee.paid) return;

    const totalAmount = Number(fee.total);
    const paidAmount = Number(fee.paid);
    const dueAmount = totalAmount - paidAmount;

    setFees([
      {
        ...fee,
        id: Date.now(),
        total: totalAmount,
        paid: paidAmount,
        due: dueAmount,
      },
      ...fees,
    ]);

    setFee({ studentName: "", total: "", paid: "" });
  };

  const deleteFee = (id) => {
    setFees(fees.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Add Fee Record</h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={fee.studentName}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>
          <input
            type="number"
            name="total"
            placeholder="Total Amount"
            value={fee.total}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>
          <input
            type="number"
            name="paid"
            placeholder="Paid Amount"
            value={fee.paid}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"/>
          <button
            type="submit"
            className="bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Add Fee
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Fee Records</h3>
        {fees.length === 0 ? (
          <p className="text-gray-500">No fee records added yet.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Student</th>
                <th className="p-3">Total</th>
                <th className="p-3">Paid</th>
                <th className="p-3">Due</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.studentName}</td>
                  <td className="p-3">${item.total}</td>
                  <td className="p-3 text-green-600">${item.paid}</td>
                  <td className="p-3 text-red-600">${item.due}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        item.due === 0
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.due === 0 ? "Paid" : "Pending"}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteFee(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
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


export default FeeManagement;
