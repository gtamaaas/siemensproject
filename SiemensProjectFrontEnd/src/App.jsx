import SearchBar from "./Searchbar";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

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
  try {
    const userLocation = await getUserLocation();

    const hotelsResponse = await axios.get("http://localhost:8080/hotels");
    const hotels = hotelsResponse.data;

    let cord1 = {
      longitude: userLocation.longitude,
      latitude: userLocation.latitude,
    };

    let cord2;
    let newHotels = [];
    for (const hotel of hotels) {
      cord2 = { longitude: hotel.longitude, latitude: hotel.latitude };
      const coordinateRequest = { cord1, cord2 };
      const res = await axios.post(
        "http://localhost:8080/coordinates",
        coordinateRequest
      );
      hotel.distance = res.data;
      newHotels.push(hotel);
    }

    return newHotels;
  } catch (error) {
    console.error("An error occurred while loading data:", error);
    throw error;
  }
}

function App() {
  const loadedHotels = useLoaderData();
  if (loadedHotels.size != 0)
    return (
      <>
        <SearchBar hotels={loadedHotels} />
      </>
    );
  else return <div>please enable geolocation</div>;
}

export default App;
