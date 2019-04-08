import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => setNotes(response.data));
  }, []);

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const rows = () =>
    notesToShow.map(note => <Note key={note.id} note={note} />);

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString,
      important: Math.random() > 0.5,
      id: notes.length + 1
    };

    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const handleNoteChange = event => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Muistiinpanot</h1>
      <form onSubmit={addNote}>
        <input
          placeholder="uusi muistiinpano..."
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">tallenna</button>
      </form>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          näyta {showAll ? 'vain tärkeät' : 'kaikki'}
        </button>
      </div>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
