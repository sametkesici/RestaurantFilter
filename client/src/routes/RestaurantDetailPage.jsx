import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data.restaurants[0]);
        setSelectedRestaurant(response.data.data.restaurants[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <div>{selectedRestaurant.name}</div>;
};

export default RestaurantDetailPage;
