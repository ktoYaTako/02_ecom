import React, { useEffect, useState } from "react";
import { Car } from "../../graphql/generated";
import classes from "./FavoriteCardBox.module.css";
import FavoriteCard from "../FavoriteCard/FavoriteCard";

const FavoriteCardBox: React.FC = () => {
  const [favoritesArray, setFavoritesArray] = useState<Car[]>([]);

  const updateFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    setFavoritesArray(favorites ? JSON.parse(favorites) : []);
  };

  useEffect(() => {
    updateFavorites();
  }, []);

  const handleDelete = (id: number) => {
    const updatedFavorites = favoritesArray.filter((car) => car.id !== id);
    setFavoritesArray(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favoritesArray.length === 0) {
    return <h4>Избранных автомобилей нет</h4>;
  }

  return (
    <>
      <div className={classes.tag_line}>
        <h4>Избранные товары - {favoritesArray.length} позиций</h4>
      </div>
      {favoritesArray.map((car: Car) => (
        <FavoriteCard
          key={car.id}
          car={car}
          text={"Выбрать комплектацию"}
          onDelete={() => handleDelete(car.id)}
        />
      ))}
    </>
  );
};

export default FavoriteCardBox;
