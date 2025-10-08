import { useState } from "react";
import { useNotesContext } from "../../context/NotesContext";
import Button from "../ui/Button";
import EditForm from "./EditForm";

const Note = (props) => {
  const [isEditing, setEditingStatus] = useState(false);
  const { removeNote } = useNotesContext();
  const data = props.data;

  const toggleEditing = () => {
    setEditingStatus(!isEditing);
  };

  const noteData = (
    <div>
      <h3 className="name">{data.name}</h3>
      <p className="text">{data.content}</p>
    </div>
  );

  return (
    <div className="note-card">
      {isEditing ? (
        <EditForm note={data} toggleEditing={toggleEditing} />
      ) : (
        noteData
      )}
      <p>{data.id}</p>
      {!isEditing && <Button text="Edit" action={toggleEditing} />}
      {!isEditing && <Button text="Delete" action={() => removeNote(data)} />}
    </div>
  );
};

export default Note;
