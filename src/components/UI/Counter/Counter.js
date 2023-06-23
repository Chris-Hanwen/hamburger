import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const Counter = (props) => {
  const ctx = useContext(CartContext);

  const addButtonHandler = () => {
   
    ctx.addItem(props.meal);
  };
  const subButtonHandler = () => {
    ctx.removeItem(props.meal);
  };
  return (
    <div className={classes.counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button className={classes.sub} onClick={subButtonHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      ) : null}

      <button className={classes.add} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
