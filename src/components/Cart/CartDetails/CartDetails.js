import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import { useContext, useState } from "react";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  const [showConfirm, setShowConfirm] = useState(false);

  const showConfirmHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const okHandler = () => {
    ctx.clearCart();
  };

  return (
    <Backdrop onClick={cancelHandler}>
      {showConfirm && (
        <Confirm
          confirmText={"Remove all items?"}
          onCancel={cancelHandler}
          onOk={okHandler}
        />
      )}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Shopping Cart</h2>
          <div className={classes.Clear} onClick={showConfirmHandler}>
            <FontAwesomeIcon icon={faTrash} />
            <span>Delete all items</span>
          </div>
        </header>
        <div className={classes.MealList}>
          {ctx.items.map((item) => (
            <Meal noDesc key={item.id} meal={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};
export default CartDetails;
