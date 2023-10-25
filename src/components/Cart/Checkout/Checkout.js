import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import Cart from "../Cart";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Bar from "./Bar/Bar";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
  const ctx = useContext(CartContext);
  return ReactDOM.createPortal(
    <div className={classes.Checkout}>
      <div className={classes.close}>
        <FontAwesomeIcon icon={faXmark} onClick={() => props.onHide()} />
      </div>
      <div className={classes.MealsDesc}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>Shopping Cart</h2>
        </header>
        <div className={classes.Meals}>
          {ctx.items.map((item) => (
            <CheckoutItem key={item.id} meal={item} />
          ))}
        </div>
        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>
      <Bar totalPrice={ctx.totalPrice}/>
    </div>,
    checkoutRoot
  );
};

export default Checkout;
