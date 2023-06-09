import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import SearchMealsButton from './SearchMealsButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FlavorDash</h1>
        <SearchMealsButton></SearchMealsButton>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
