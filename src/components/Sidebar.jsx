import { FaHome, FaWpforms, FaUsers, FaCog, FaQuestionCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">FormApp</h1>

      <ul className="space-y-4">
        <li className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
          <FaHome /> Dashboard
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
          <FaWpforms /> Forms
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
          <FaUsers /> Users
        </li>
        <li className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
          <FaCog /> Settings
        </li>
        <li className="flex items-center gap-3 text-red-300 hover:bg-blue-700 p-2 rounded cursor-pointer">
          <FaQuestionCircle /> Help
        </li>
      </ul>

      <div className="mt-10 text-sm">
        Storage Usage
        <div className="w-full bg-blue-700 rounded-full h-2 mt-2">
          <div className="bg-green-400 h-2 rounded-full w-1/4"></div>
        </div>
        <p className="mt-1">25% used</p>
      </div>
    </aside>
  );
}
