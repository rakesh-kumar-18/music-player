import { FaHome, FaChartLine, FaMusic, FaCompass, FaCog, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
    return (
        <aside className="bg-black text-[#F6F6F6] w-60 h-screen flex flex-col justify-between p-5">
            <div className="flex items-center mb-10">
                <FaMusic className="text-red-500 w-8 h-8 mr-4" />
                <h1 className="text-2xl font-bold text-red-500">
                    Dream<span className="text-white">Music</span>
                </h1>
            </div>

            <nav className="flex-1">
                <h2 className="text-[#CFC5C5] text-xs mb-4">MENU</h2>
                <ul className="space-y-4">
                    <li className="flex items-center space-x-3 text-red-500">
                        <FaHome />
                        <span>Home</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FaChartLine className="text-red-500" />
                        <span>Trends</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FaMusic className="text-red-500" />
                        <span>Library</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FaCompass className="text-red-500" />
                        <span>Discover</span>
                    </li>
                </ul>
            </nav>

            <div>
                <h2 className="text-[#CFC5C5] text-xs mb-4">GENERAL</h2>
                <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                        <FaCog className="text-red-500" />
                        <span>Settings</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FaSignOutAlt className="text-red-500" />
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
