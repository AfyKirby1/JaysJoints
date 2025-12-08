import React from 'react';
import { MapPin, Link as LinkIcon, Users } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const ProfileCard = () => {
  return (
    <div className="profile-column">
      <div className="glass-panel profile-card">
        <div className="profile-pic-container">
          <div className="profile-pic">
            <img src={profilePic} alt="Jay" />
          </div>
          <div className="status-indicator online"></div>
        </div>

        <div className="profile-info">
          <h1>Jay's Joints</h1>
          <p className="mood">Mood: 🎵 Creating</p>

          <div className="stats">
            <span><MapPin size={14} /> NYC</span>
            <span><Users size={14} /> 4.2k Fans</span>
          </div>

          <div className="actions">
            <button className="btn primary">Follow</button>
            <button className="btn">Message</button>
          </div>
        </div>

        <div className="about-section">
          <h3>About Me</h3>
          <p>
            Independent artist producing beats and vibes.
            Blending retro synths with modern trap drums.
            Welcome to my digital space.
          </p>
          <a href="#" className="website-link"><LinkIcon size={14} /> jaysjoints.com</a>
        </div>
      </div>

      <div className="glass-panel friends-panel">
        <h3>Top Connections</h3>
        <div className="friends-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="friend-item">
              <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&auto=format&fit=crop&q=60`} alt="Friend" />
              <span>Artist {i}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .profile-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .profile-card {
          padding: 1.5rem;
          text-align: center;
        }

        .profile-pic-container {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 0 auto 1.5rem;
        }

        .profile-pic {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent-color);
          box-shadow: 0 0 20px var(--accent-glow);
        }

        .profile-pic img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-indicator {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 16px;
          height: 16px;
          background: #00ff88;
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
        }

        .profile-info h1 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .mood {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 1rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .stats span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .actions {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .btn.primary {
          background: var(--accent-color);
          border-color: var(--accent-color);
        }

        .about-section {
          text-align: left;
          padding-top: 1.5rem;
          border-top: 1px solid var(--glass-border);
        }

        .about-section h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .about-section p {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .website-link {
          color: var(--accent-color);
          text-decoration: none;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Friends/Connections */
        .friends-panel {
          padding: 1.5rem;
        }

        .friends-panel h3 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .friends-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .friend-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .friend-item img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: var(--radius-sm);
          background: #333;
        }

        .friend-item span {
          font-size: 0.7rem;
          color: var(--text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
