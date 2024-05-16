import SearchBar from "./Searchbar";
import { hotels } from "./hotels";
import { useLoaderData } from "react-router-dom";

export async function loader() {
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
