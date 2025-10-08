import { useContext, createContext } from "react";
import { useNotes } from "../hooks/useNotes";

const NotesContext = createContext(undefined);

export const NotesProvider = ({ children }) => {
  const { notes, getNotes, setNotes, addNote, removeNote } = useNotes();

  return (
    <NotesContext.Provider value={{ notes, getNotes, setNotes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
