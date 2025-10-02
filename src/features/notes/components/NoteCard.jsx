import Button from "../../../components/ui/Button";
import { useNoteContext } from "../context/NoteContext";
import trashIcon from "../../../assets/icons/trash.png";
import editIcon from "../../../assets/icons/edit.png";

const NoteCard = (props) => {
  const { deleteNote } = useNoteContext();
  const data = props.data;

  return (
    <div className="note-card">
      <h3 className="title">{data.title || "New note"}</h3>
      <p className="text content">{data.content || "This is a note."}</p>
      <div className="buttons-container">
        <Button
        action={undefined}
        icon={editIcon}
        color="yellow"
      />
      <Button
        action={() => deleteNote(props.data)}
        icon={trashIcon}
        text="Delete"
        color="red"
      />
      </div>
    </div>
  );
};

export default NoteCard;
