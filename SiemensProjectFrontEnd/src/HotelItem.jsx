import { Link } from "react-router-dom";

function HotelItem({ hotel }) {
  const id = hotel.id;
  const distance = String(hotel.distance);
  return (
    <>
      <div
        key={hotel.id}
        class="flex gap-10 justify-between border flex-col  w-96"
      >
        <div className="flex">
          <div className="flex-1">{hotel.name}</div>
          <div className=""> Distance: {distance.substring(0, 5)}</div>
        </div>
        <div className="flex justify-center">
          <Link className="bg-blue-100 rounded-3xl p-3 m-3" to={`hotels/` + id}>
            Check out hotel
          </Link>
        </div>
      </div>
    </>
  );
}

export default HotelItem;
