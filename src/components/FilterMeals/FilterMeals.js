import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./FilterMeals.module.css";
import { useEffect, useState } from "react";

const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState("");

  useEffect(
    () => {
      const timer = setTimeout(() => {
        props.onFilter(keyword)
      }, 1000);

      return ()=>{
        clearTimeout(timer)
      }
  }, [keyword]);

  const InputChangeHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOuter}>
        <input
          value={keyword}
          onChange={InputChangeHandler}
          type="text"
          placeholder="请输入关键字"
          className={classes.SearchInput}
        />
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
      </div>
    </div>
  );
};

export default FilterMeals;
