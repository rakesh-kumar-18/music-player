import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ArtistInfo from "./components/ArtistInfo";
import SongList from "./components/SongList";
import NowPlayingCard from "./components/NowPlayingCard";
// import { MusicPlayerProvider } from "./components/MusicPlayerProvider";
import { AudioProvider } from './contexts/AudioContext';

function App() {
  return (
    <AudioProvider>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col bg-custom-gradient">
          <Header />
          <ArtistInfo />
          <SongList />
        </main>
        <div className="w-80 bg-gradient-to-b from-[#2c0a0a] to-black flex items-end justify-center">
          <NowPlayingCard />
        </div>
      </div>
    </AudioProvider>
  );
}

export default App;
