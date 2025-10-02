import { useState, useEffect } from "react";

export const useNotes = () => {
  // la clave para acceder a localStorage
  const STORAGE_KEY = "notes-app";

  // obtiene las notas desde localStorage
  const getNotes = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  };

  const [notes, setNotes] = useState(getNotes());

  // devuelve un nuevo objeto nota
  const createNote = (title, content) => {
    const note = {
      id: Date.now(),
      title,
      content,
    };
    return note;
  };

  // actualiza localStorage cuando cambia la lista notas
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  // cambia la lista notas
  const addNote = (note) => {
    setNotes((notes) => [...notes, note]);
  };

  // elimina una nota de la lista
  const deleteNote = (deletedNote) => {
    const updatedNotes = notes.filter(note => note.id !== deletedNote.id);
    setNotes(updatedNotes);
  }

  return { notes, getNotes, setNotes, createNote, addNote, deleteNote };
};
