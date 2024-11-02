import { useQuery, gql } from "@apollo/client";
import { Car } from "../../graphql/generated";

const GET_CARS = gql`
  query GetCars {
    cars {
      id
      brand
      model
      model_year
      description
      color
      img_src
      price
      availability
    }
  }
`;

export const useGetCars = () => {
  const { loading, error, data } = useQuery<{ cars: Car[] }>(GET_CARS);

  return {
    loading,
    error,
    cars: data?.cars || [],
  };
};
