import styles from "./Button.module.css";

// REFACTOR!!!
const Button = ({
  children,
  onClick,
  spanTwo,
  equalButton,
  zeroButton,
  grey,
  delButton,
  squareButton }) => {
  return (
      <button className={`
      ${spanTwo ? styles.spanTwo : ""}
      ${styles.button}
      ${equalButton ? styles.equalButton : ""}
      ${zeroButton ? styles.zeroButton : ""}
      ${grey ? styles.grey : ""}
      ${delButton ? styles.delButton : ""}
      ${squareButton ? styles.squareButton : ""}
       `} onClick={onClick}>{children}</button>
  )
}

export default Button