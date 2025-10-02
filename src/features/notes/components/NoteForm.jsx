import { useState } from "react";
import { useNoteContext } from "../context/NoteContext";
import Button from "../../../components/ui/Button";
import plusIcon from "../../../assets/icons/plus.png";

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
    clearInputs();
    addNote(newNote);
  };

  const clearInputs = () => {
    setTitle("");
    setContent("");
  };

  return (
    <div className="note-form">
      <h2 className="title">Add a New Note</h2>
      <div className="form">
      <input value={noteTitle}  className="input" type="text" placeholder="Title" onChange={titleHandler} />
      <textarea value={noteContent}  className="input" placeholder="Content" onChange={contentHandler}></textarea>
      <Button action={updateNotes} text="Add note" icon={plusIcon} color="green" />
      </div>
    </div>
  );
};

export default NoteForm;
