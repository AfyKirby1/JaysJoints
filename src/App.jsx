import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import ProfileCard from './components/ProfileCard'
import Feed from './components/Feed'
import MusicPlayer from './components/MusicPlayer'
import Hero from './components/Hero'
import AlbumGrid from './components/AlbumGrid'
import TrackList from './components/TrackList'
import ModernFeed from './components/ModernFeed'

function App() {
  const [designMode, setDesignMode] = useState('classic');

  useEffect(() => {
    // Load saved design mode preference
    const savedMode = localStorage.getItem('designMode');
    if (savedMode) {
      setDesignMode(savedMode);
    }
  }, []);

  const toggleDesignMode = () => {
    const newMode = designMode === 'classic' ? 'modern' : 'classic';
    setDesignMode(newMode);
    localStorage.setItem('designMode', newMode);
  };

  return (
    <Layout designMode={designMode} onDesignModeChange={toggleDesignMode}>
      {designMode === 'classic' ? (
        <>
          <div className="main-grid">
            <aside className="sidebar-left">
              <ProfileCard />
            </aside>

            <main className="content-area">
              <Feed />
            </main>
          </div>
          <MusicPlayer />
        </>
      ) : (
        <>
          <div className="modern-layout">
            <Hero />
            <AlbumGrid />
            <TrackList />
            <ModernFeed />
          </div>
          <MusicPlayer />
        </>
      )}
    </Layout>
  )
}

export default App
