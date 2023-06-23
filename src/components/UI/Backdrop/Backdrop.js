import classes from "./Backdrop.module.css";
import ReactDom from "react-dom";

const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = (props) => {
  return ReactDom.createPortal(
    <div {...props} className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;
