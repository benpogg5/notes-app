import NoteCard from "./features/notes/components/NoteCard";
import NoteForm from "./features/notes/components/NoteForm";
import { useNoteContext } from "./features/notes/context/NoteContext";
import { useState, useEffect } from "react";

const App = () => {
  const { notes } = useNoteContext();

  const [noteCards, setNoteCards] = useState([]);

  useEffect(() => {
    setNoteCards(notes.map((note) => <NoteCard key={note.id} data={note} />));
  }, [notes]);

  return (
    <div className="app">
      <header>
        <h1 className="title">Notes App</h1>
      </header>
      <main>
        <NoteForm />
        <div className="note-grid">
        {noteCards}
        </div>
      </main>
      <footer>
        <p>Created by Benjamín Poggio.</p>
      </footer>
    </div>
  );
};

export default App;
