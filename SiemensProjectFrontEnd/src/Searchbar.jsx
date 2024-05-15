import React, { useState } from "react";
import { hotels } from "./hotels";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <input
        placeholder="Enter desired radius"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      {hotels
        .filter((hotel) => {
          if (hotel.distance <= searchInput) return hotel;
        })
        .map((hotel) => (
          <div>
            {hotel.name} {hotel.distance}
          </div>
        ))}
    </>
  );
}

export default SearchBar;
