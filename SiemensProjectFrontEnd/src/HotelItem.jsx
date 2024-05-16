import { Link } from "react-router-dom";

function HotelItem({ hotel }) {
  const id = hotel.id;
  return (
    <>
      <div key={hotel.id} class="flex gap-10 border">
        <div>{hotel.name}</div>
        <div> Distance from you: {hotel.distance}</div>
        <Link to={`hotels/` + id}>Check out hotel</Link>
      </div>
    </>
  );
}

export default HotelItem;
