const NoteCard = (props) => {
  const data = props.data;

  return (
    <div className="note-card">
      <h3 className="title">{data.title}</h3>
      <p className="text content">{data.content}</p>
    </div>
  );
};

export default NoteCard;
