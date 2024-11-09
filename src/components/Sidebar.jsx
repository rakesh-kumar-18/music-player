
function Sidebar() {
    return (
        <aside className="bg-black text-white w-60 h-screen flex flex-col justify-between p-5">
            <div>
                <h1 className="text-2xl font-bold mb-6">DreamMusic</h1>
                <nav>
                    <ul className="space-y-4">
                        <li>Home</li>
                        <li>Trends</li>
                        <li>Library</li>
                        <li>Discover</li>
                    </ul>
                </nav>
            </div>
            <div>
                <ul>
                    <li>Settings</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
