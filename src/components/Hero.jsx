import React from 'react';
import { Play, Download, Share2 } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="modern-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img src={profilePic} alt="Jay's Joints" className="hero-image" />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Jay's Joints</h1>
          <p className="hero-subtitle">Independent Artist • Producer • NYC</p>
          <p className="hero-description">
            Blending retro synths with modern trap drums. 
            Creating vibes that hit different.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4.2K</span>
              <span className="stat-label">Fans</span>
            </div>
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Tracks</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Albums</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-hero primary">
              <Play size={20} fill="currentColor" />
              Play Latest
            </button>
            <button className="btn-hero">
              <Download size={20} />
              Download
            </button>
            <button className="btn-hero">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .modern-hero {
          position: relative;
          width: 100%;
          min-height: 70vh;
          display: flex;
          align-items: flex-end;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 3rem;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4) contrast(1.1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            var(--bg-primary) 0%,
            transparent 50%,
            transparent 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 3rem;
          padding-bottom: 4rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.25rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-hero {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-family: var(--font-main);
        }

        .btn-hero.primary {
          background: var(--accent-color);
          color: white;
          box-shadow: 0 4px 20px var(--accent-glow);
        }

        .btn-hero.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px var(--accent-glow);
        }

        .btn-hero:not(.primary) {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-hero:not(.primary):hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 1.5rem;
            padding-bottom: 3rem;
          }

          .hero-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          .btn-hero {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;

