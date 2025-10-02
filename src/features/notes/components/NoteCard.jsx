const NoteCard = (props) => {
  const data = props.data;

  return (
    <div className="note-card">
      <h3 className="title">{data.title || "New note"}</h3>
      <p className="text content">{data.content || "This is a note."}</p>
    </div>
  );
};

export default NoteCard;
