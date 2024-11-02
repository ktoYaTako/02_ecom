import React from "react";
import { Car } from "../../graphql/generated";
import ActiveButton from "../UI/Button/ActiveButton/ActiveButton";
import DisactiveButton from "../UI/Button/DisactiveButton/DisactiveButton";
import classes from "./FavoriteCard.module.css";
import useToggleLike from "../hooks/useToggleLike";
import icons from "../../helpers/logos";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addFavorite, removeFavorite } from "../../features/favoritesSlice";

interface FavoriteCardProps {
  car: Car;
  text?: string;
  onDelete: () => void;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ car, onDelete }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.favorites.items);

  const isCarInFavorites = favorites.some(
    (favoriteCar) => favoriteCar.id === car.id
  );

  const { liked, toggleLike } = useToggleLike(isCarInFavorites);

  const updateLocalStorage = (updatedFavorites: Car[]) => {
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleToggleLike = () => {
    toggleLike();

    if (liked) {
      dispatch(removeFavorite(car));
      const updatedFavorites = favorites.filter(
        (favCar) => favCar.id !== car.id
      );
      updateLocalStorage(updatedFavorites);
      onDelete();
    } else {
      dispatch(addFavorite(car));
      const updatedFavorites = [...favorites, car];
      updateLocalStorage(updatedFavorites);
    }
  };

  const fullImageUrl = `http://localhost:4000${car.img_src}`;

  return (
    <div key={car.id} className={classes.card}>
      <div
        className={
          car.availability
            ? classes.product_img_container
            : classes.product_img_container_disactive
        }
      >
        <img
          className={
            car.availability
              ? classes.product_img
              : classes.product_img_disactive
          }
          src={fullImageUrl ?? undefined}
          alt={`${car.brand} ${car.model}`}
        />
        {car.availability ? null : (
          <div className={classes.availability}>Нет в наличии</div>
        )}
      </div>

      <div className={classes.text_box}>
        <div className={classes.title_box}>
          <h2>{car.brand}</h2>
          <h2>{car.model}</h2>
        </div>
        <div className={classes.description}>
          <p>{car.description}</p>
        </div>
        <div className={classes.sub_title_box}>
          <p>Год: {car.model_year}</p>
          <p>Цвет: {car.color}</p>
        </div>
        <h3 className={classes.price}>от {car.price}</h3>

        <div className={classes.btns}>
          {car.availability ? (
            <ActiveButton text={"Выбрать комплектацию"} />
          ) : (
            <DisactiveButton />
          )}
          <img
            className={classes.delete}
            onClick={handleToggleLike}
            src={icons.deleteBtn}
            alt="Удалить"
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
