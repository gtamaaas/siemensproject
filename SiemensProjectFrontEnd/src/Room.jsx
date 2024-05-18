import { useState } from "react";

function Room({ room, toggledRooms, setToggledRooms }) {
  const [checked, setChecked] = useState(false);

  const reservation = room.reservation;
  const handleChange = () => {
    setChecked(!checked);
    if (toggledRooms.indexOf(room.roomNumber) == -1) {
      setToggledRooms([...toggledRooms, room.roomNumber]);
    } else {
      setToggledRooms(
        toggledRooms.filter((toggledRoom) => toggledRoom !== room.roomNumber)
      );
    }
  };

  if (reservation != null) {
    return (
      <div className="flex flex-col bg-green-100 border-2">
        <div> Paid: {reservation.price}</div>
        <div>Reserved:{}</div>
        <div>
          {"(" +
            reservation.checkInDate.substring(0, 10) +
            ") - (" +
            reservation.checkoutDate.substring(0, 10) +
            ")"}
        </div>
        <div> Room already reserved! </div>
      </div>
    );
  } else if (room.isAvailable) {
    return (
      <div className="bg-blue-100 flex flex-col border-2">
        <div className="p-1"> Price: {room.price}</div>
        <div className="p-1"> Type of room: {room.type}</div>
        <div className="p-1">
          <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Reserve this room
          </label>
        </div>
      </div>
    );
  } else if (!room.isAvailable) {
    return (
      <div className="bg-red-100 border-2">
        <div> Price: {room.price}</div>
        <div> Room not available! </div>
      </div>
    );
  }
}

export default Room;
