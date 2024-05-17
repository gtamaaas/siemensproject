import Room from "./Room";
import { useState } from "react";
import { hotels } from "./hotels";
import { useLoaderData } from "react-router-dom";
import { Form, redirect } from "react-router-dom";

export async function loader({ params }) {
  const hotel = hotels[params.hotelId - 1];
  return hotel;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const hotel = Object.fromEntries(formData);
  console.log(hotel);
  return null;
}

function HotelPage() {
  const [toggledRooms, setToggledRooms] = useState([]);
  const [reservedRooms, setReservedRooms] = useState([]);
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckOutDate] = useState();
  const hotel = useLoaderData();
  const rooms = hotel.rooms.map((room) => (
    <Room
      room={room}
      toggledRooms={toggledRooms}
      setToggledRooms={setToggledRooms}
    />
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(toggledRooms);
    console.log(new Date(checkinDate));
    console.log(new Date(checkoutDate));
  };

  const onChangeCheckInDate = (e) => {
    setCheckinDate(e.target.value);
  };

  const onChangeCheckOutDate = (e) => {
    setCheckOutDate(e.target.value);
  };

  return (
    <Form method="post">
      <div key={hotel.id} class="flex h-screen flex-col">
        <div>{hotel.name}</div>
        {rooms}
        <label for="checkin">Checkin date:</label>
        <input
          type="date"
          value={checkinDate}
          id="checkin"
          name="checkin"
          onChange={onChangeCheckInDate}
        ></input>
        <label for="checkin">Checkout date:</label>
        <input
          type="date"
          value={checkoutDate}
          id="checkout"
          name="checkout"
          onChange={onChangeCheckOutDate}
        ></input>
        <input type="text" />
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
}

export default HotelPage;
