import React from 'react';
import { Play, Heart, MoreVertical } from 'lucide-react';

const AlbumGrid = () => {
  const albums = [
    {
      id: 1,
      title: 'Neon Nights',
      artist: "Jay's Joints",
      year: '2024',
      cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&auto=format&fit=crop&q=80',
      tracks: 8,
      duration: '32:15'
    },
    {
      id: 2,
      title: 'Midnight Sessions',
      artist: "Jay's Joints",
      year: '2023',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=80',
      tracks: 6,
      duration: '24:42'
    },
    {
      id: 3,
      title: 'Digital Dreams',
      artist: "Jay's Joints",
      year: '2023',
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&auto=format&fit=crop&q=80',
      tracks: 10,
      duration: '41:30'
    }
  ];

  return (
    <section className="album-section">
      <div className="section-header">
        <h2 className="section-title">Albums & EPs</h2>
        <a href="#" className="section-link">View All</a>
      </div>

      <div className="album-grid">
        {albums.map(album => (
          <div key={album.id} className="album-card">
            <div className="album-cover-container">
              <img src={album.cover} alt={album.title} className="album-cover" />
              <div className="album-overlay">
                <button className="album-play-btn">
                  <Play size={24} fill="currentColor" />
                </button>
                <div className="album-actions">
                  <button className="album-action-btn">
                    <Heart size={18} />
                  </button>
                  <button className="album-action-btn">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="album-info">
              <h3 className="album-title">{album.title}</h3>
              <p className="album-meta">{album.year} • {album.tracks} tracks • {album.duration}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .album-section {
          margin-bottom: 4rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .section-link {
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: opacity 0.2s;
        }

        .section-link:hover {
          opacity: 0.8;
        }

        .album-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .album-card {
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid var(--glass-border);
        }

        .album-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .album-cover-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
        }

        .album-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .album-card:hover .album-cover {
          transform: scale(1.05);
        }

        .album-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .album-card:hover .album-overlay {
          opacity: 1;
        }

        .album-play-btn {
          width: 64px;
          height: 64px;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px var(--accent-glow);
          transition: transform 0.2s ease;
        }

        .album-play-btn:hover {
          transform: scale(1.1);
        }

        .album-actions {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .album-action-btn {
          width: 36px;
          height: 36px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .album-action-btn:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }

        .album-info {
          padding: 1.25rem;
        }

        .album-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .album-meta {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .album-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AlbumGrid;

