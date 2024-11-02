import React from "react";
import logos from "../../../helpers/logos";
import classes from "./Select.module.css";

interface SelectProps {
  onSortChange: (criteria: string) => void;
}

const Select: React.FC<SelectProps> = ({ onSortChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <form className={classes.form}>
      <img src={logos.sort} alt="" />
      <select className={classes.select} onChange={handleChange}>
        <option value="availability">Сначала в наличии</option>
        <option value="nameAsc">По имени (A-Z)</option>
        <option value="nameDesc">По имени (Z-A)</option>
        <option value="newest">Сначала новее</option>
        <option value="oldest">Сначала старше</option>
        <option value="cheaper">Сначала дешевле</option>
        <option value="expensive">Сначала дороже</option>
      </select>
    </form>
  );
};

export default Select;
