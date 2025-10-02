const Button = (props) => {
  return (
    <button className="button" onClick={props.action}>
      {props.text}
    </button>
  )
}

export default Button;