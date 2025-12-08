import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            {/* Top Navigation could go here */}
            <nav className="top-nav glass-panel">
                <div className="logo">JAY'S JOINTS</div>
                <div className="nav-links">
                    <a href="#" className="active">Home</a>
                    <a href="#">Music</a>
                    <a href="#">Merch</a>
                    <a href="#">Contact</a>
                </div>
            </nav>

            <div className="container">
                {children}
            </div>

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
        }

        .logo {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          background: linear-gradient(45deg, #fff, #aaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
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
        }
      `}</style>
        </div>
    );
};

export default Layout;
