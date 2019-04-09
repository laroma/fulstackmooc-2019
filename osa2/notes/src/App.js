import React, { useState, useEffect } from 'react';
import noteService from './services/notes';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then(allNotes => setNotes(allNotes));
  }, []);

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then(updatedNote =>
        setNotes(notes.map(note => (note.id !== id ? note : updatedNote)))
      );
  };

  const rows = () =>
    notesToShow.map(note => (
      <Note
        key={note.id}
        note={note}
        toggleImportance={() => toggleImportanceOf(note.id)}
      />
    ));

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString,
      important: Math.random() > 0.5
    };

    noteService.create(noteObject).then(newNote => {
      setNotes(notes.concat(newNote));
      setNewNote('');
    });
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
