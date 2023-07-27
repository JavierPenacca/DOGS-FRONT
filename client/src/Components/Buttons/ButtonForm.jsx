import { Link } from 'react-router-dom';
import styles from "./Buttons.module.css"
const ButtonForm = ()=>{
  return (
<Link to="/create">
      <button className={styles.buttonForm} title="Form"></button>
</Link>
    )}
export default ButtonForm