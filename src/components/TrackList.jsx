import React, { useState } from 'react';
import { Play, Pause, Heart, MoreVertical, Clock } from 'lucide-react';

const TrackList = () => {
  const [playingId, setPlayingId] = useState(null);

  const tracks = [
    {
      id: 1,
      title: 'Neon Nights',
      artist: "Jay's Joints",
      duration: '3:45',
      plays: '12.4K',
      cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Midnight Drive',
      artist: "Jay's Joints",
      duration: '4:12',
      plays: '8.9K',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Digital Dreams',
      artist: "Jay's Joints",
      duration: '3:28',
      plays: '15.2K',
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Synthwave Sunset',
      artist: "Jay's Joints",
      duration: '4:01',
      plays: '9.7K',
      cover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'City Lights',
      artist: "Jay's Joints",
      duration: '3:55',
      plays: '11.3K',
      cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&auto=format&fit=crop&q=80'
    }
  ];

  const togglePlay = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="track-section">
      <div className="section-header">
        <h2 className="section-title">Popular Tracks</h2>
        <a href="#" className="section-link">View All</a>
      </div>

      <div className="track-list-container">
        <div className="track-list-header">
          <span className="track-header-number">#</span>
          <span className="track-header-title">Title</span>
          <span className="track-header-plays">Plays</span>
          <span className="track-header-duration">
            <Clock size={16} />
          </span>
          <span className="track-header-actions"></span>
        </div>

        <div className="track-list">
          {tracks.map((track, index) => (
            <div 
              key={track.id} 
              className={`track-item ${playingId === track.id ? 'playing' : ''}`}
              onClick={() => togglePlay(track.id)}
            >
              <div className="track-number">
                {playingId === track.id ? (
                  <div className="track-playing-indicator"></div>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              <div className="track-info">
                <img src={track.cover} alt={track.title} className="track-cover" />
                <div className="track-details">
                  <div className="track-title">{track.title}</div>
                  <div className="track-artist">{track.artist}</div>
                </div>
              </div>

              <div className="track-plays">{track.plays}</div>

              <div className="track-duration">{track.duration}</div>

              <div className="track-actions" onClick={(e) => e.stopPropagation()}>
                <button className="track-action-btn">
                  <Heart size={18} />
                </button>
                <button className="track-action-btn">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .track-section {
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

        .track-list-container {
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border-radius: var(--radius-lg);
          border: 1px solid var(--glass-border);
          overflow: hidden;
        }

        .track-list-header {
          display: grid;
          grid-template-columns: 40px 1fr 100px 60px 80px;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .track-list {
          display: flex;
          flex-direction: column;
        }

        .track-item {
          display: grid;
          grid-template-columns: 40px 1fr 100px 60px 80px;
          gap: 1rem;
          padding: 1rem 1.5rem;
          align-items: center;
          cursor: pointer;
          transition: background 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .track-item:last-child {
          border-bottom: none;
        }

        .track-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .track-item.playing {
          background: rgba(112, 0, 255, 0.1);
        }

        .track-item.playing .track-title {
          color: var(--accent-color);
        }

        .track-number {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .track-playing-indicator {
          width: 20px;
          height: 20px;
          border: 2px solid var(--accent-color);
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .track-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .track-cover {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }

        .track-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .track-title {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .track-artist {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .track-plays {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .track-duration {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .track-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: flex-end;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .track-item:hover .track-actions {
          opacity: 1;
        }

        .track-action-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .track-action-btn:hover {
          color: var(--accent-color);
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .track-list-header,
          .track-item {
            grid-template-columns: 30px 1fr 60px 50px;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
          }

          .track-header-plays,
          .track-plays {
            display: none;
          }

          .track-cover {
            width: 40px;
            height: 40px;
          }

          .track-title {
            font-size: 0.85rem;
          }

          .track-artist {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TrackList;

