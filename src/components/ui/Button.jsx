const Button = (props) => {
  return (
    <button className={`button ${props.color}`} onClick={props.action}>
      {props.icon && <img className="icon" src={props.icon} />}
      {props.text && <span className="text">{props.text}</span>}
    </button>
  );
};

export default Button;
