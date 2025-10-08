import { useNotesContext } from "../../context/NotesContext";
import Button from "../ui/Button";

const Note = (props) => {
  const {removeNote} = useNotesContext();
  const data = props.data;

  return (
    <div className="note-card">
      <h3 className="name">{data.name}</h3>
      <p className="text">{data.content}</p>
      <p>{data.id}</p>
      <Button text="Edit" />
      <Button text="Delete" action={() => removeNote(data)} />
    </div>
  );
};

export default Note;
