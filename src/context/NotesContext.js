import { useContext, createContext } from "react";
import { useNotes } from "../hooks/useNotes";

const NotesContext = createContext(undefined);

export const NotesProvider = ({ children }) => {
  const { notes, getNotes, setNotes, addNote, removeNote, editNote } = useNotes();

  return (
    <NotesContext.Provider value={{ notes, getNotes, setNotes, addNote, removeNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
