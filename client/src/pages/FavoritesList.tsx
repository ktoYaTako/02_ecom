import React from "react";
import FavoriteCardBox from "../components/FavoriteCardBox/FavoriteCardBox";

const FavoritesList: React.FC = () => {
  return (
    <div className="favorites-list container">
      <FavoriteCardBox />
    </div>
  );
};

export default FavoritesList;
