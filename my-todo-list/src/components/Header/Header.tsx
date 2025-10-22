import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

export const Header = () => {
  const getStyles = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.link} ${classes.active}` : `${classes.link}`;
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" className={getStyles}>
          Home
        </NavLink>
        <NavLink to="/list" className={getStyles}>
          To Do List
        </NavLink>
      </div>
    </header>
  );
};
