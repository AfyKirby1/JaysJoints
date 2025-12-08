import React from 'react';
import { Heart, MessageCircle, Share2, Play } from 'lucide-react';

const Feed = () => {
    const posts = [
        {
            id: 1,
            type: 'release',
            title: 'New Track: "Neon Nights" dropped today!',
            content: 'Just uploaded the new single. Check it out in the player below. Inspired by 80s sci-fi and late night drives.',
            image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60',
            likes: 124,
            comments: 18
        },
        {
            id: 2,
            type: 'update',
            title: 'Studio Update',
            content: 'Working on the new EP. The analog synths are hitting different today. Can\'t wait to show you what I\'ve been cooking.',
            image: null,
            likes: 89,
            comments: 12
        }
    ];

    return (
        <div className="feed-container">
            <div className="glass-panel update-composer">
                <textarea placeholder="What's on your mind?"></textarea>
                <div className="composer-actions">
                    <button className="btn">Post Update</button>
                </div>
            </div>

            <div className="feed-posts">
                {posts.map(post => (
                    <article key={post.id} className="glass-panel post">
                        <header className="post-header">
                            <div className="post-meta">
                                <h2>{post.title}</h2>
                                <span className="timestamp">2 hours ago</span>
                            </div>
                            {post.type === 'release' && <span className="tag release">New Release</span>}
                        </header>

                        <div className="post-content">
                            <p>{post.content}</p>
                            {post.image && (
                                <div className="media-container">
                                    <img src={post.image} alt="Post content" />
                                    {post.type === 'release' && (
                                        <div className="play-overlay">
                                            <div className="play-btn"><Play fill="currentColor" /></div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <footer className="post-footer">
                            <button className="action-btn"><Heart size={18} /> {post.likes}</button>
                            <button className="action-btn"><MessageCircle size={18} /> {post.comments}</button>
                            <button className="action-btn"><Share2 size={18} /> Share</button>
                        </footer>
                    </article>
                ))}
            </div>

            <style>{`
        .feed-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .update-composer {
          padding: 1.5rem;
        }

        .update-composer textarea {
          width: 100%;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-sm);
          padding: 1rem;
          color: var(--text-primary);
          font-family: var(--font-main);
          resize: vertical;
          min-height: 100px;
          margin-bottom: 1rem;
        }

        .update-composer textarea:focus {
          outline: none;
          border-color: var(--accent-color);
        }

        .composer-actions {
          display: flex;
          justify-content: flex-end;
        }

        .post {
          padding: 1.5rem;
          transition: transform 0.2s;
        }
        
        /* Interactive hover effect for posts */
        .post:hover {
          background: rgba(30, 30, 35, 0.7);
        }

        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .post-header h2 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .timestamp {
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        .tag {
          background: var(--accent-color);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .post-content p {
          color: #ddd;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .media-container {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-top: 1rem;
        }

        .media-container img {
          width: 100%;
          display: block;
        }

        .play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
          cursor: pointer;
        }

        .media-container:hover .play-overlay {
          opacity: 1;
        }

        .play-btn {
          width: 64px;
          height: 64px;
          background: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 20px var(--accent-glow);
          transform: scale(0.9);
          transition: transform 0.2s;
        }

        .media-container:hover .play-btn {
          transform: scale(1);
        }

        .post-footer {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }

        .action-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-main);
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .action-btn:hover {
          color: var(--accent-color);
        }
      `}</style>
        </div>
    );
};

export default Feed;
