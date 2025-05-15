import React from 'react';

const Home = () => {
  return (
    <div className="pt-20  bg-slate-700 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">🎉 Welcome to the Admin Dashboard</h1>
      <p className="text-lg text-slate-300 mb-6">
        You are logged in as a <span className="text-green-400 font-semibold">Admin</span>. This dashboard allows you to manage various sections of the school website.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Management */}
        <div className="bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-600">
          <h2 className="text-xl font-semibold mb-2 text-blue-400">👥 User Management</h2>
          <ul className="list-disc list-inside text-slate-300">
            <li>Create new admin users with secure credentials.</li>
            <li>Manage role-based access (superadmin only).</li>
            <li>Reset passwords via OTP-based verification.</li>
          </ul>
        </div>

        {/* Achievement Management */}
        <div className="bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-600">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">🏆 Achievements Management</h2>
          <ul className="list-disc list-inside text-slate-300">
            <li>Add school-wide achievements and success stories.</li>
            <li>Upload images, titles, and descriptions.</li>
            <li>Publish or delete achievements at any time.</li>
          </ul>
        </div>

        {/* Notice Management */}
        <div className="bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-600">
          <h2 className="text-xl font-semibold mb-2 text-red-400">📢 Public Notice Management</h2>
          <ul className="list-disc list-inside text-slate-300">
            <li>Create and update public notices.</li>
            <li>Set dates and descriptions for each notice.</li>
            <li>Control what appears on the homepage for students/parents.</li>
          </ul>
        </div>

        {/* Teacher & Student Management */}
        <div className="bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-600">
          <h2 className="text-xl font-semibold mb-2 text-green-400">🎓 Teacher & Student Management</h2>
          <ul className="list-disc list-inside text-slate-300">
            <li>Add, view, and delete teacher profiles.</li>
            <li>Manage student data by class.</li>
            <li>Record and view student marks, attendance, and details.</li>
          </ul>
        </div>

        {/* Principal Message */}
        <div className="bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-600 col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-2 text-purple-400">🎤 Principal's Message</h2>
          <ul className="list-disc list-inside text-slate-300">
            <li>Update or replace the message from the principal anytime.</li>
            <li>This is displayed on the school's about page for visitors.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-sm text-slate-400">
        Need help? Contact the web developer or refer to the admin guide provided during system handover.
      </div>
    </div>
  );
};

export default Home;
