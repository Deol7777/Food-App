import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useRef } from "react";


const SearchMealsButton = (props) => {
  const cartCtx = useContext(CartContext);

  let numberOfCartItems = 0;
  for (const item of cartCtx.items) {
    numberOfCartItems += item.amount;
  }
  const searchInputRef = useRef();
  const searchInputChanged = () =>
  {
    const searchedItem = searchInputRef.current.value;
    console.log(searchedItem);
  }


  return (
    <button className={classes.button} onClick={props.onClick}>

      <form className={classes.form}>
        <div>
          <label htmlFor="name">Search</label>
          <input
            className={classes.search}
            type="text"
            id="search"
            ref={searchInputRef}
            onChange={searchInputChanged}
          />
        </div>
      </form>
    </button>
  );
};

export default SearchMealsButton;
