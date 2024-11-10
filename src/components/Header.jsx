import { FaSearch } from "react-icons/fa";

function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 text-[#E5DDDD]">
            <nav className="flex space-x-14 text-lg font-medium">
                <span className="hover:text-red-500 cursor-pointer">Music</span>
                <span className="hover:text-red-500 cursor-pointer">Podcast</span>
                <span className="hover:text-red-500 cursor-pointer">Live</span>
                <span className="hover:text-red-500 cursor-pointer">Radio</span>
            </nav>

            <div className="flex items-center bg-[#2C0000] rounded-full px-4 py-2 w-96">
                <input
                    type="text"
                    placeholder="Michael Jackson"
                    className="bg-transparent focus:outline-none w-full text-white placeholder-white"
                />
                <FaSearch className="text-white ml-3 cursor-pointer" />
            </div>
        </header>
    );
}

export default Header;
