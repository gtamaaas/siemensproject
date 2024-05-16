import Room from "./Room";
import { useState } from "react";
import { hotels } from "./hotels";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const hotel = hotels[params.hotelId - 1];
  console.log(hotel);
  return hotel;
}

function HotelPage() {
  const [toggledRooms, setToggledRooms] = useState([]);
  const hotel = useLoaderData();
  const rooms = hotel.rooms.map((room) => (
    <Room
      room={room}
      toggledRooms={toggledRooms}
      setToggledRooms={setToggledRooms}
    />
  ));

  return (
    <form>
      <div key={hotel.id} class="flex h-screen flex-col">
        <div>{hotel.name}</div>
        <div> Distance from you: {hotel.distance}</div>
        {rooms}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default HotelPage;
