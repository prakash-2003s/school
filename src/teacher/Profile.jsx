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

const Profile = () => {

  return (
    

      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
                S
              </div>
              <h3 className="mt-4 text-xl font-semibold">Siva Kumar</h3>
              <p className="text-gray-500 text-sm">Mathematics Teacher</p>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>📧 siva@school.com</p>
                <p>📞 +1 234 567 890</p>
                <p>🏫 Class Teacher - 10A</p>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-6">Edit Profile</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="siva"
                    className="w-full border px-4 py-2 rounded-lg"/>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="kumar"
                    className="w-full border px-4 py-2 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="siva@school.com"
                    className="w-full border px-4 py-2 rounded-lg"/>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    defaultValue="+1 234 567 890"
                    className="w-full border px-4 py-2 rounded-lg"/>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">
                    Address
                  </label>
                  <textarea
                    rows="3"
                    defaultValue="123 School Street, New York"
                    className="w-full border px-4 py-2 rounded-lg resize-none"/>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Profile;
