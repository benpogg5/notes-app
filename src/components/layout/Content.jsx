import { useState, useEffect } from "react";
import { useNotesContext } from "../../context/NotesContext";
import Form from "../notes/Form";
import Note from "../notes/Note";

const Content = () => {
  const [noteCards, setNoteCards] = useState([]);
  const { notes } = useNotesContext();

  useEffect(() => {
    setNoteCards(notes.map((note) => <Note key={note.id} data={note} />));
  }, [notes]);

  return (
    <main className="content">
      <h1 className="title">Notes App</h1>
      <Form />
      <div className="notes-grid">{noteCards}</div>
    </main>
  );
};

export default Content;
