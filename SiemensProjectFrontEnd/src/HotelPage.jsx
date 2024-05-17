import Room from "./Room";
import { useState } from "react";
import { hotels } from "./hotels";
import { useLoaderData } from "react-router-dom";
import { Form, redirect } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  const hotel = hotels[params.hotelId - 1];
  return hotel;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const hotel = Object.fromEntries(formData);
  const checkIn = Date.parse(hotel.checkin);
  const checkOut = Date.parse(hotel.checkout);
  const checkedRooms = hotel.checkedRooms.split(",");
  if (hotel.checkedRooms.length === 0) {
    alert("You can't reserve without choosing any room!");
    return null;
  }
  if (isNaN(checkIn) || isNaN(checkOut)) {
    alert("Please choose correct dates");
    return null;
  }
  if (checkIn >= checkOut) {
    alert("Checkout date can't be before checkin date, please try again");
    return null;
  }
  console.log(hotel);

  const reservationRequests = [];
  checkedRooms.forEach((room) => {
    const reservationRequest = {
      checkInDate: hotel.checkin,
      checkOutDate: hotel.checkout,
      roomNumber: room,
      hotelId: hotel.id,
      price: 100,
    };
    reservationRequests.push(reservationRequest);
  });
  const res = await axios.post(
    "http://localhost:8080/reservation",
    reservationRequests
  );
  console.log(res.data);
  alert("Succesfull reservation, returning to main page");
  return redirect("/");
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
        <input type="hidden" name="id" value={hotel.id}></input>
        <input type="hidden" name="checkedRooms" value={toggledRooms}></input>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
}

export default HotelPage;
