// src/components/PoemCard.jsx
import { useState } from 'react';

function PoemCard({ poem, onToggleRead, onToggleFavorite, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const formattedDate = new Date(poem.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className={`poem-card ${poem.isRead ? 'read' : 'unread'}`}>
      <div className="poem-header">
        <h3 className="poem-title" onClick={() => setExpanded(!expanded)}>
          {poem.title}
        </h3>
        <div className="poem-meta">
          {poem.author && <span className="poem-author">by {poem.author}</span>}
          <span className="poem-date">{formattedDate}</span>
        </div>
      </div>
      
      {expanded && (
        <div className="poem-content">
          <pre>{poem.content}</pre>
        </div>
      )}
      
      <div className="poem-actions">
        <button 
          className={`read-btn ${poem.isRead ? 'marked' : ''}`}
          onClick={() => onToggleRead(poem.id)}
        >
          {poem.isRead ? 'Mark as unread' : 'Mark as read'}
        </button>
        
        <button 
          className={`favorite-btn ${poem.isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(poem.id)}
        >
          {poem.isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
        </button>
        
        <button 
          className="delete-btn"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this poem?')) {
              onDelete(poem.id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PoemCard;