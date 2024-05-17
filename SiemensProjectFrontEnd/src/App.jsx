import SearchBar from "./Searchbar";
import { hotels } from "./hotels";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
          reject(error);
        }
      );
    } else {
      const error = new Error("Geolocation is not supported by this browser.");
      console.error(error.message);
      reject(error);
    }
  });
}

export async function loader() {
  const userLocation = await getUserLocation();
  console.log(userLocation);
  return hotels;
}

function App() {
  const loadedHotels = useLoaderData();

  return (
    <>
      <SearchBar hotels={loadedHotels} />
    </>
  );
}

export default App;
