import React, { useEffect } from "react";
import { Car } from "../../graphql/generated";
import ActiveButton from "../UI/Button/ActiveButton/ActiveButton";
import DisactiveButton from "../UI/Button/DisactiveButton/DisactiveButton";
import classes from "./ProductCard.module.css";
import useToggleLike from "../hooks/useToggleLike";
import icons from "../../helpers/logos";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addFavorite, removeFavorite } from "../../features/favoritesSlice";

interface CarProps {
  car: Car;
  text?: string;
  isFavorite?: boolean;
}

const ProductCard: React.FC<CarProps> = ({ car }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.favorites.items);

  const isCarInFavorites = favorites.some(
    (favoriteCar) => favoriteCar.id === car.id
  );

  const { liked, toggleLike } = useToggleLike(isCarInFavorites);

  const handleToggleLike = () => {
    toggleLike();

    if (liked) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
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
          <h3>{car.brand}</h3>
          <h3>{car.model}</h3>
        </div>
        <div className={classes.sub_title_box}>
          <p>Год: {car.model_year}</p>
          <p>Цвет: {car.color}</p>
        </div>
        <span className={classes.price}>от {car.price}</span>
      </div>

      <div className={classes.btns}>
        {car.availability ? (
          <ActiveButton text={"Купить"} />
        ) : (
          <DisactiveButton />
        )}
        <img
          className={classes.like}
          onClick={handleToggleLike}
          src={liked ? icons.unLike : icons.like}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductCard;
