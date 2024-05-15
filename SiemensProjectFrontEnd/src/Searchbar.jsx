import React, { useState } from "react";
import { hotels } from "./hotels";

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
        filteredHotels.map((hotel) => (
          <div key={hotel.id}>
            {hotel.name} {hotel.distance}
          </div>
        ))
      ) : (
        <div>No hotels found within the specified radius.</div>
      )}
    </>
  );
}

export default SearchBar;
