import Room from "./Room";
import { useState } from "react";

function HotelPage({ hotel }) {
  const [toggledRooms, setToggledRooms] = useState([]);
  const rooms = hotel.rooms.map((room) => (
    <Room
      room={room}
      toggledRooms={toggledRooms}
      setToggledRooms={setToggledRooms}
    />
  ));
  return (
    <>
      <div key={hotel.id} class="flex h-screen flex-col">
        <div>{hotel.name}</div>
        <div> Distance from you: {hotel.distance}</div>
        {rooms}
        {toggledRooms.map((toggledRoom) => (
          <div> {toggledRoom} </div>
        ))}
      </div>
    </>
  );
}

export default HotelPage;
