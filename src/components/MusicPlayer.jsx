import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, List } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(30); // Mock progress

    return (
        <div className="player-dock glass-panel">
            <div className="player-content container">

                <div className="track-info">
                    <div className="album-art">
                        <div className="music-note-icon">🎵</div>
                    </div>
                    <div className="track-details">
                        <div className="track-title">Neon Nights</div>
                        <div className="artist-name">Jay's Joints</div>
                    </div>
                </div>

                <div className="controls-main">
                    <div className="buttons">
                        <button className="control-btn sm"><SkipBack size={20} /></button>
                        <button
                            className="control-btn play-pause-btn"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                        </button>
                        <button className="control-btn sm"><SkipForward size={20} /></button>
                    </div>
                    <div className="progress-bar-container">
                        <span className="time">1:24</span>
                        <div className="progress-track">
                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                        <span className="time">3:45</span>
                    </div>
                </div>

                <div className="controls-extra">
                    <button className="control-btn sm"><Volume2 size={20} /></button>
                    <button className="control-btn sm"><List size={20} /></button>
                </div>

            </div>

            <style>{`
        .player-dock {
          position: fixed;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 2rem);
          max-width: var(--spacing-container);
          padding: 0; /* Reset default padding */
          z-index: 1000;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(10, 10, 15, 0.85); /* Slightly darker for contrast */
          backdrop-filter: blur(20px);
        }

        .player-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          width: 100%;
        }

        .track-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 250px;
        }

        .album-art {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--accent-color), #00ff88);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .track-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .artist-name {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .controls-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          max-width: 500px;
        }

        .buttons {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .control-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .control-btn:hover {
          color: var(--text-primary);
        }

        .play-pause-btn {
          width: 40px;
          height: 40px;
          background: var(--text-primary);
          color: var(--bg-primary);
          border-radius: 50%;
        }

        .play-pause-btn:hover {
          transform: scale(1.1);
          color: var(--bg-primary); /* Keep text color black */
          box-shadow: 0 0 15px rgba(255,255,255,0.3);
        }

        .progress-bar-container {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: var(--font-mono);
        }

        .progress-track {
          flex: 1;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          cursor: pointer;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: var(--accent-color);
          border-radius: 2px;
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          right: -4px;
          top: -3px;
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .progress-track:hover .progress-fill::after {
          opacity: 1;
        }

        .controls-extra {
          width: 250px;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .track-info { display: none; }
          .controls-extra { display: none; }
          .player-dock { bottom: 0; width: 100%; border-radius: 0; border-bottom: 0; }
        }
      `}</style>
        </div>
    );
};

export default MusicPlayer;
