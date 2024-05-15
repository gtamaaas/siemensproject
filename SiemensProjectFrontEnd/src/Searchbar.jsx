import React, { useState } from "react";
import { hotels } from "./hotels";
import HotelItem from "./HotelItem";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const filteredHotels = hotels.filter(
    (hotel) => hotel.distance <= searchInput
  );

  return (
    <>
      <input
        placeholder="Enter desired radius"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => <HotelItem hotel={hotel} />)
      ) : (
        <div>No hotels found within the specified radius.</div>
      )}
    </>
  );
}

export default SearchBar;
