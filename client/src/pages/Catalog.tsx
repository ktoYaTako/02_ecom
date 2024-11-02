import { FC } from "react";
import carsJSON from "../fake_cars.json";
import { Query } from "../graphql/generated";
import ProductCardBox from "../components/ProductCardBox/ProductCardBox";

const Catalog: FC = () => {
  const cars: Query["cars"] = carsJSON;

  return (
    <div className="container">
      <ProductCardBox />
    </div>
  );
};

export default Catalog;
