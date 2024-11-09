
function Header() {
    return (
        <header className="flex justify-between items-center bg-gradient-to-r from-red-800 to-black p-4 text-white">
            <div className="space-x-4">
                <span>Music</span>
                <span>Podcast</span>
                <span>Live</span>
                <span>Radio</span>
            </div>
            <input
                type="text"
                placeholder="Search"
                className="bg-gray-800 p-2 rounded-md focus:outline-none"
            />
        </header>
    );
}

export default Header;
