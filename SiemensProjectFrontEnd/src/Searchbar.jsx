import React, { useState } from "react";
import HotelItem from "./HotelItem";

function SearchBar({ hotels }) {
  const [searchInput, setSearchInput] = useState("");
  const filteredHotels = hotels.filter(
    (hotel) => hotel.distance <= searchInput
  );

  return (
    <div>
      <input
        placeholder="Enter desired radius"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => <HotelItem hotel={hotel} />)
      ) : (
        <div>No hotels found within the specified radius.</div>
      )}
    </div>
  );
}

export default SearchBar;
