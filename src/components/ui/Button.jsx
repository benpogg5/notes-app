const Button = (props) => {
  return (
    <button className={`button ${props.color}`} onClick={props.action}>
      {props.icon && <img src={props.icon} className="icon" alt="icon" />}
      {props.text && <span>{props.text}</span>}
    </button>
  )
}

export default Button;