import NoteCard from "./features/notes/components/NoteCard";
import NoteForm from "./features/notes/components/NoteForm";
import { useNoteContext } from "./features/notes/context/NoteContext";
import { useState, useEffect } from "react";
import "./assets/css/app.scss";

const App = () => {
  const { notes } = useNoteContext();

  const [noteCards, setNoteCards] = useState([]);

  useEffect(() => {
    setNoteCards(notes.map((note) => <NoteCard key={note.id} data={note} />));
  }, [notes]);

  document.title = "Notes App";

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
        <p className="text">Created by Benjamín Poggio.</p>
      </footer>
    </div>
  );
};

export default App;
