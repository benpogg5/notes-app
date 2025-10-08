import { useState } from "react";
import Button from "../ui/Button";
import { useNotesContext } from "../../context/NotesContext";

const Form = () => {
  const {addNote} = useNotesContext();

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      name: name || "New note",
      content: content || "Note content",
    };

    setName("");
    setContent("");

    addNote(newNote);
  }

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="form">
      <input
        onChange={handleName}
        type="text"
        name="name"
        id="name"
        placeholder="Note name"
        value={name}
      />
      <input
        onChange={handleContent}
        type="text"
        name="content"
        id="content"
        placeholder="Note content"
        value={content}
      />
      <Button text="Create Note" action={createNote} />
    </div>
  );
};

export default Form;
