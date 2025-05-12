// src/components/PoemList.jsx
import PoemCard from './PoemCard';

function PoemList({ poems, onToggleRead, onToggleFavorite, onDelete }) {
  if (poems.length === 0) {
    return <div className="empty-state">No poems available. Add your first poem!</div>;
  }

  return (
    <div className="poem-list">
      {poems.map(poem => (
        <PoemCard
          key={poem.id}
          poem={poem}
          onToggleRead={onToggleRead}
          onToggleFavorite={onToggleFavorite}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PoemList;