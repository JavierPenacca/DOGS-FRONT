import styles from "./Buttons.module.css";
import { useDispatch } from "react-redux";
import { resetFilters, getAllDogs } from "../../redux/actions";

const ButtonReset = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetFilters());
    dispatch(getAllDogs());
  };

  return (
    <button
      className={styles.buttonReset}
      title="Reset"
      onClick={handleClick}
    ></button>
  );
};
export default ButtonReset;
