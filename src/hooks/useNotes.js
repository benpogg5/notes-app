import { useState, useEffect } from "react";

export const useNotes = () => {
  const getNotesFromStorage = () => {
    const notes = localStorage.getItem("notes-app");
    return notes ? JSON.parse(notes) : [];
  };

  const [notes, setNotes] = useState(getNotesFromStorage() || []);

  const updateNotes = () => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  };

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const removeNote = (deletedNote) => {
    const updatedNotes = notes.filter(note => note.id !== deletedNote.id);
    setNotes(updatedNotes);
  }

  useEffect(() => {
    updateNotes();
  }, [notes]);

  return {
    notes,
    getNotesFromStorage,
    setNotes,
    addNote,
    removeNote,
  };
};
