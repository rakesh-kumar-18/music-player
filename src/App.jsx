import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ArtistInfo from "./components/ArtistInfo";
import SongList from "./components/SongList";
import NowPlayingCard from "./components/NowPlayingCard";
import { MusicPlayerProvider } from "./components/MusicPlayerProvider";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col bg-custom-gradient">
          <Header />
          <ArtistInfo />
          <SongList />
        </main>
        <div className="w-80 bg-gradient-to-b from-[#2c0a0a] to-black flex items-center justify-center">
          <NowPlayingCard />
        </div>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
