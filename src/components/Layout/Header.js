import { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import SearchComponent from "./SearchComponent";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Grocery Shopping</h1>
        <SearchComponent/>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div></div>
    </Fragment>
  );
};

export default Header;
