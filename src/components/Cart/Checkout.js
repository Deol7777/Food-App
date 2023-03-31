import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
const Checkout = (props) => {
  //ref to get the input form the form
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const userDetailsAreValid = (array) =>
  {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        if(index === 2)
        {
            if(array[index].trim().length !== 6)
            {
                console.log("postal code");
                return false;

            }
            continue;
        }
        if(array[index].trim().length === 0)
        {console.log("spaces");
            return false;
        }
    }
    return true
  }


  //when clciking the submit button
  const confirmHandler = (event) => {
    event.preventDefault();

    //strong the ref's value
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const userdetails = [enteredName, enteredStreet, enteredPostalCode, enteredCity];
    console.log(userdetails);
    if(userDetailsAreValid(userdetails))
    {console.log("YEAHHH")}
    if(!userDetailsAreValid(userdetails))
    {
        console.log("Not valid");
    }

  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
