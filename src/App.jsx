// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import PoemForm from './components/PoemForm';
import PoemList from './components/PoemList';

function App() {
  const [poems, setPoems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Load poems from localStorage on initial render
  useEffect(() => {
    const savedPoems = localStorage.getItem('poems');
    if (savedPoems) {
      setPoems(JSON.parse(savedPoems));
    }
  }, []);

  // Save poems to localStorage whenever the poems state changes
  useEffect(() => {
    localStorage.setItem('poems', JSON.stringify(poems));
  }, [poems]);

  const addPoem = (newPoem) => {
    const poemWithId = {
      ...newPoem,
      id: Date.now(),
      isRead: false,
      isFavorite: false,
      createdAt: new Date().toISOString()
    };
    setPoems([...poems, poemWithId]);
    setShowForm(false);
  };

  const toggleRead = (id) => {
    setPoems(poems.map(poem => 
      poem.id === id ? { ...poem, isRead: !poem.isRead } : poem
    ));
  };

  const toggleFavorite = (id) => {
    setPoems(poems.map(poem => 
      poem.id === id ? { ...poem, isFavorite: !poem.isFavorite } : poem
    ));
  };

  const deletePoem = (id) => {
    setPoems(poems.filter(poem => poem.id !== id));
  };

  const filteredPoems = activeTab === 'all' 
    ? poems 
    : poems.filter(poem => poem.isFavorite);

  return (
    <div className="app-container">
      <header>
        <h1>Poem Manager</h1>
        <div className="controls">
          <button 
            className="toggle-form-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Hide Form' : 'Add New Poem'}
          </button>
        </div>
      </header>

      {showForm && (
        <div className="form-container">
          <PoemForm onSubmit={addPoem} />
        </div>
      )}

      <div className="tabs">
        <button 
          className={activeTab === 'all' ? 'active' : ''} 
          onClick={() => setActiveTab('all')}
        >
          All Poems
        </button>
        <button 
          className={activeTab === 'favorites' ? 'active' : ''}
          onClick={() => setActiveTab('favorites')}
        >
          Favorites
        </button>
      </div>

      <PoemList 
        poems={filteredPoems} 
        onToggleRead={toggleRead} 
        onToggleFavorite={toggleFavorite}
        onDelete={deletePoem}
      />
    </div>
  );
}

export default App;