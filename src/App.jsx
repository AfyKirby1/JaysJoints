import { useState } from 'react'
import Layout from './components/Layout'
import ProfileCard from './components/ProfileCard'
import Feed from './components/Feed'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <Layout>
      <div className="main-grid">
        <aside className="sidebar-left">
          <ProfileCard />
        </aside>

        <main className="content-area">
          <Feed />
        </main>
      </div>
      <MusicPlayer />
    </Layout>
  )
}

export default App
