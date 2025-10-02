import { createContext, useContext } from "react";
import { useNotes } from "../hooks/useNotes";

const NoteContext = createContext(null);

// crea un contexto de notas para usarlas en toda la app
export const NoteProvider = ({ children }) => {
  const { notes, getNotes, setNotes, createNote, addNote } = useNotes();

  return (
    <NoteContext.Provider value={{ notes, getNotes, setNotes, createNote, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => useContext(NoteContext);
