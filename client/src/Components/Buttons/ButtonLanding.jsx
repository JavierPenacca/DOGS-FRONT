import { Link } from 'react-router-dom';
import styles from "./Buttons.module.css"
const ButtonLanding = ()=>{
  return (
<Link to="/">
      <button className={styles.buttonLanding} title="Landing"></button>
</Link>
    )}
export default ButtonLanding