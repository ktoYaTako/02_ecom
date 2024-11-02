import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { Car } from "../../graphql/generated";
import { useGetCars } from "../hooks/useGetCars";
import classes from "./ProductCardBox.module.css";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import { RootState } from "../../app/store";

const ProductCardBox: React.FC = () => {
  const { loading, error, cars } = useGetCars();
  const [sortCriteria, setSortCriteria] = useState("availability");
  const [searchTerm, setSearchTerm] = useState("");

  const favoriteCars = useSelector((state: RootState) => state.favorites.items);

  const handleSortChange = (criteria: string) => {
    setSortCriteria(criteria);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredCars = () => {
    return cars.filter((car) => {
      const fullName = `${car.brand} ${car.model}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
  };

  const sortedCars = () => {
    const sorted = [...filteredCars()];
    switch (sortCriteria) {
      case "availability":
        return sorted.sort(
          (a, b) => (b.availability ? 1 : 0) - (a.availability ? 1 : 0)
        );
      case "nameAsc":
        return sorted.sort((a, b) =>
          (a.brand + " " + a.model).localeCompare(b.brand + " " + b.model)
        );
      case "nameDesc":
        return sorted.sort((a, b) =>
          (b.brand + " " + b.model).localeCompare(a.brand + " " + a.model)
        );
      case "newest":
        return sorted.sort((a, b) => b.model_year - a.model_year);
      case "oldest":
        return sorted.sort((a, b) => a.model_year - b.model_year);
      case "cheaper":
        return sorted.sort(
          (a, b) =>
            parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
            parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
        );
      case "expensive":
        return sorted.sort(
          (a, b) =>
            parseFloat(b.price.replace(/[^0-9.-]+/g, "")) -
            parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
        );
      default:
        return sorted;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="container">
      <div className={classes.content_box}>
        <div className={classes.sort_box}>
          <Select onSortChange={handleSortChange} />
          <Input onSearch={handleSearch} />
        </div>
        <div className={classes.content_cards}>
          {sortedCars().map((car: Car) => (
            <ProductCard
              key={car.id}
              car={car}
              isFavorite={favoriteCars.some((fav) => fav.id === car.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductCardBox;
