import React from "react";
import icons from "../../helpers/logos";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={`${classes.header} container content_box `}>
        <div className={classes.left_part}>
          <Link to="/">
            <div className={classes.logo}>
              <img className={classes.logo1} src={icons.logo1} alt="" />
              <img className={classes.logo2} src={icons.logo2} alt="" />
            </div>
          </Link>
          <div className={classes.btn}>
            <Link to="/">
              <button>
                <img src={icons.burger} alt="" />
                <h4>Каталог</h4>
              </button>
            </Link>
          </div>
        </div>
        <div className={classes.right_part}>
          <div className={classes.contacts}>
            <span className={classes.adress}>
              <h4>Москва, Волгоградский пр-кт, 43, стр 1</h4>
            </span>
            <span className={classes.number}>
              <a href="tel:+78005553535">
                <h4>+7 800 555 35 35</h4>
              </a>
            </span>
          </div>
          <div className="favor">
            <Link to="/favorites">
              <button className={classes.favorites}>
                <img src="../../public/Vector.svg" alt="" />
                Избранное
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
