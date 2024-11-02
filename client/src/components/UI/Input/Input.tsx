import React, { useState } from "react";
import classes from "./Input.module.css";
import logos from "../../../helpers/logos";

interface InputProps {
  onSearch: (searchTerm: string) => void;
}

const Input: React.FC<InputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className={classes.search_box}>
      <input
        className={classes.input}
        placeholder="Найти авто"
        value={searchTerm}
        onChange={handleChange}
      />
      <button>
        <img src={logos.search} alt="" />
      </button>
    </div>
  );
};

export default Input;
