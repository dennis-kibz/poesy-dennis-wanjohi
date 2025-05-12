// src/components/PoemForm.jsx
import { useState } from 'react';

function PoemForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!title.trim() || !content.trim()) {
      alert('Please fill in at least the title and content fields');
      return;
    }

    // Create new poem object
    const newPoem = {
      title,
      author,
      content
    };

    // Send it to the parent component
    onSubmit(newPoem);

    // Reset form
    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <form className="poem-form" onSubmit={handleSubmit}>
      <h2>Create New Poem</h2>
      
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter poem title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name (optional)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Poem *</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your poem here"
          rows="6"
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">Save Poem</button>
      </div>
    </form>
  );
}

export default PoemForm;