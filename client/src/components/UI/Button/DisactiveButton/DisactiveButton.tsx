import React from "react";
import classes from "./DisactiveButton.module.css";

const DisactiveButton = () => {
  return (
    <button disabled className={classes.disactive_button}>
      Купить
    </button>
  );
};

export default DisactiveButton;
