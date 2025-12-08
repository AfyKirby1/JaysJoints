import React, { useState, useEffect } from 'react';
import { Sun, Moon, Eye } from 'lucide-react';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleLogoClick = () => {
    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);

    if (newClicks >= 5) {
      const newTheme = theme === 'psychedelic' ? 'dark' : 'psychedelic';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      setLogoClicks(0); // Reset
      alert(newTheme === 'psychedelic' ? "👁️ YOU HAVE OPENED YOUR THIRD EYE 👁️" : "Reality restored.");
    }
  };

  return (
    <div className="app-layout">
      {/* Top Navigation */}
      <nav className="top-nav glass-panel">
        <div
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer', userSelect: 'none' }}
          title="Keep clicking to open your mind..."
        >
          JAY'S JOINTS {theme === 'psychedelic' && '👁️'}
        </div>

        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Music</a>
          <a href="#">Merch</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      <div className="container">
        {children}
      </div>

      {theme === 'psychedelic' && (
        <div className="flying-objects">
          {['🍄', '🛸', '👽', '🎵', '🍕', '👁️', '🌈', '👾', '🦄'].map((emoji, index) => (
            <div
              key={index}
              className="floater"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      )}

      <style>{`
        .app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .top-nav {
          position: sticky;
          top: 1rem;
          margin: 0 auto 2rem;
          width: calc(100% - 2rem);
          max-width: var(--spacing-container);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          transition: all 0.3s ease;
        }

        .logo {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          background: linear-gradient(45deg, var(--text-primary), var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: transform 0.1s;
        }

        .logo:active {
          transform: scale(0.95);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--text-primary);
        }

        .theme-toggle {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .theme-toggle:hover {
          color: var(--accent-color);
          background: rgba(255,255,255,0.1);
        }

        .main-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 2rem;
          padding-bottom: 120px; /* Space for player */
        }


        @media (max-width: 800px) {
          .main-grid {
            grid-template-columns: 1fr;
          }
          .nav-links {
            gap: 1rem;
          }
        }

        /* Flying Objects Layer */
        .flying-objects {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none; /* Let clicks pass through */
          z-index: 50; /* Behind the glass panels if possible, or on top? On top makes it chaotic which is requested */
          overflow: hidden;
        }

        .floater {
          position: absolute;
          bottom: -100px; /* Start below screen */
          font-size: 3rem;
          opacity: 0.8;
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
