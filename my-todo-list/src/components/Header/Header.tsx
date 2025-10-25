import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../features/themeList";

export const Header = () => {
  const getStyles = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.link} ${classes.active}` : `${classes.link}`;
  };

  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" className={getStyles}>
          Home
        </NavLink>
        <NavLink to="/list" className={getStyles}>
          To Do List
        </NavLink>

        <div className={classes.toggleButton}>
          <button onClick={() => dispatch(toggleThemeAction())}>Theme</button>
        </div>
      </div>
    </header>
  );
};
