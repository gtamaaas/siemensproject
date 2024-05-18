import Room from "./Room";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Form, redirect } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  const hotel = await axios.get(
    "http://localhost:8080/hotels/" + params.hotelId
  );
  return hotel.data;
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
  if (checkIn == checkOut) {
    alert(
      "Checkout date can't be on the same date as the checkin date, please try again"
    );
    return null;
  }
  if (checkIn > checkOut) {
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
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckOutDate] = useState();

  const hotel = useLoaderData();
  console.log(hotel);
  const rooms = hotel.rooms.map((room) => (
    <Room
      room={room}
      toggledRooms={toggledRooms}
      setToggledRooms={setToggledRooms}
    />
  ));

  const onChangeCheckInDate = (e) => {
    setCheckinDate(e.target.value);
  };

  const onChangeCheckOutDate = (e) => {
    setCheckOutDate(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Form method="post">
        <div
          key={hotel.id}
          class="flex h-screen flex-col justify-between border-2  w-96"
        >
          <div className="text-3xl text-center">{hotel.name}</div>
          <div>
            <div>{rooms}</div>
            <div className="flex flex-col">
              <label for="checkin">Checkin date:</label>
              <input
                className="border-2 border-gray-600"
                type="date"
                value={checkinDate}
                id="checkin"
                name="checkin"
                onChange={onChangeCheckInDate}
              ></input>
              <label for="checkin">Checkout date:</label>
              <input
                className="border-2 border-gray-600"
                type="date"
                value={checkoutDate}
                id="checkout"
                name="checkout"
                onChange={onChangeCheckOutDate}
              ></input>
            </div>
          </div>
          <input type="text" />
          <input type="hidden" name="id" value={hotel.id}></input>
          <input type="hidden" name="checkedRooms" value={toggledRooms}></input>
          <button
            className="bg-blue-500 text-white rounded-3xl p-3 m-3"
            type="submit"
          >
            Make reservation
          </button>
        </div>
      </Form>
    </div>
  );
}

export default HotelPage;
