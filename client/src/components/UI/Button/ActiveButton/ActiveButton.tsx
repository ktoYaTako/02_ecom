import React from "react";
import classes from "./ActiveButton.module.css";

const ActiveButton = (props: { text: string }) => {
  return <button className={classes.active_button}>{props.text}</button>;
};

export default ActiveButton;
