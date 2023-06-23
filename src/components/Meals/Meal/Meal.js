import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter";

const Meal = (props) => {
  return (
    <div className={classes.meal}>
      <div className={classes.imgBox}>
        <img src={props.meal.img} alt="" />
      </div>
      <div className={classes.DescBox}>
        <h2 className={classes.title}>{props.meal.title}</h2>
        {props.noDesc?null:<p className={classes.desc}>{props.meal.desc}</p>}
        
        <div className={classes.priceWrap}>
          <span className={classes.price}>{props.meal.price}</span>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
