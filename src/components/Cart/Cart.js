import classes from "./Cart.module.css";
import iconImage from "../../assets/bag.png";
import CartContext from "../../store/cart-context";
import { useContext, useEffect } from "react";
import CartDetails from "./CartDetails/CartDetails";
import { useState } from "react";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
  const ctx = useContext(CartContext);
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  },[ctx.totalAmount]);

  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    }
    setShowDetails((prevState) => !prevState);
  };
  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };
  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  };
  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
      {showDetails && <CartDetails />}
      <div className={classes.Icon}>
        <img src={iconImage} alt="" />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>
      {ctx.totalAmount === 0 ? (
        <p className={classes.NoMeal}>Your Cart is empty</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}

      <button
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.Disabled : ""
        }`}
        onClick={showCheckoutHandler}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
