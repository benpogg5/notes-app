import { useState } from "react";
import { useNoteContext } from "../context/NoteContext";
import Button from "../../../components/ui/Button";

const NoteForm = () => {
  const { createNote, addNote } = useNoteContext();

  const [noteTitle, setTitle] = useState("");
  const [noteContent, setContent] = useState("");

  // agrega un manejador de eventos para el input de titulo y contenido
  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  // actualiza las notas
  const updateNotes = () => {
    const newNote = createNote(noteTitle, noteContent);
    addNote(newNote);
  };

  return (
    <div className="note-form">
      <h2 className="subtitle">Add a New Note</h2>
      <input className="input" type="text" placeholder="Title" onChange={titleHandler} />
      <textarea className="input" placeholder="Content" onChange={contentHandler}></textarea>
      <Button action={updateNotes} text="Add note" />
    </div>
  );
};

export default NoteForm;
