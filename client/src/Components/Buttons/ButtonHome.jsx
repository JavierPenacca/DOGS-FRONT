import { Link } from 'react-router-dom';
import styles from "./Buttons.module.css"
const ButtonHome = ()=>{
  return (
<Link to="/home">
      <button className={styles.buttonHome} title="Home"></button>
</Link>
    )}
export default ButtonHome