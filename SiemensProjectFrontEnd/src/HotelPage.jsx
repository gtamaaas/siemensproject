import Room from "./Room";

function HotelPage({ hotel }) {
  const rooms = hotel.rooms.map((room) => <Room room={room} />);
  return (
    <>
      <div key={hotel.id} class="flex h-screen flex-col">
        <div>{hotel.name}</div>
        <div> Distance from you: {hotel.distance}</div>
        {rooms}
      </div>
    </>
  );
}

export default HotelPage;
