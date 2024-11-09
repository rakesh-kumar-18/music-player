import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ArtistInfo from "./components/ArtistInfo";
import SongList from "./components/SongList";
import NowPlayingCard from "./components/NowPlayingCard";
import { MusicPlayerProvider } from "./components/MusicPlayerProvider";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <ArtistInfo />
          <SongList />
        </main>
        <NowPlayingCard />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
