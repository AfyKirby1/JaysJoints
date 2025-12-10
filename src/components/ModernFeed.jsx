import React from 'react';
import { Calendar, MapPin, Music } from 'lucide-react';

const ModernFeed = () => {
  const updates = [
    {
      id: 1,
      type: 'release',
      title: 'New Single: "Neon Nights"',
      date: 'December 7, 2024',
      content: 'Just dropped my latest track! Inspired by 80s sci-fi and late night drives through the city. Check it out now.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      type: 'update',
      title: 'Studio Session',
      date: 'December 5, 2024',
      content: 'Working on the new EP. The analog synths are hitting different today. Can\'t wait to show you what I\'ve been cooking.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      type: 'event',
      title: 'Live Performance',
      date: 'December 3, 2024',
      content: 'Performing at The Underground this Friday! Come through for an intimate set of new tracks and fan favorites.',
      image: null
    }
  ];

  return (
    <section className="modern-feed-section">
      <div className="section-header">
        <h2 className="section-title">Latest Updates</h2>
      </div>

      <div className="feed-grid">
        {updates.map(update => (
          <article key={update.id} className="feed-card">
            {update.image && (
              <div className="feed-card-image">
                <img src={update.image} alt={update.title} />
                {update.type === 'release' && (
                  <div className="feed-card-badge">
                    <Music size={16} />
                    New Release
                  </div>
                )}
              </div>
            )}
            
            <div className="feed-card-content">
              <div className="feed-card-header">
                <h3 className="feed-card-title">{update.title}</h3>
                <div className="feed-card-meta">
                  <Calendar size={14} />
                  <span>{update.date}</span>
                </div>
              </div>
              
              <p className="feed-card-text">{update.content}</p>

              {update.type === 'event' && (
                <div className="feed-card-event">
                  <MapPin size={16} />
                  <span>The Underground, NYC</span>
                </div>
              )}

              <div className="feed-card-actions">
                <button className="feed-action-btn">Read More</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .modern-feed-section {
          margin-bottom: 4rem;
        }

        .section-header {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .feed-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .feed-card {
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border-radius: var(--radius-lg);
          border: 1px solid var(--glass-border);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feed-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .feed-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .feed-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .feed-card:hover .feed-card-image img {
          transform: scale(1.05);
        }

        .feed-card-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--accent-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .feed-card-content {
          padding: 1.5rem;
        }

        .feed-card-header {
          margin-bottom: 1rem;
        }

        .feed-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .feed-card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .feed-card-text {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .feed-card-event {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-color);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: rgba(112, 0, 255, 0.1);
          border-radius: var(--radius-sm);
        }

        .feed-card-actions {
          display: flex;
          justify-content: flex-end;
        }

        .feed-action-btn {
          background: none;
          border: 1px solid var(--glass-border);
          color: var(--accent-color);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .feed-action-btn:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .feed-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ModernFeed;

