import { useState } from "react";
import Button from "../ui/Button";
import { useNotesContext } from "../../context/NotesContext";

const EditForm = (props) => {
  const { editNote } = useNotesContext();
  const [name, setName] = useState(props.note.name);
  const [content, setContent] = useState(props.note.content);

  const saveNote = () => {
    const editedNote = {
      ...props.note,
      name: name || "New note",
      content: content || "Note content",
    };

    editNote(editedNote);
  };

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
      <Button text="Close" action={props.toggleEditing} />
      <Button text="Save" action={saveNote} />
    </div>
  );
};

export default EditForm;
