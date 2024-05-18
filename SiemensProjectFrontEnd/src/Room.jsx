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
      <div>
        <div> {reservation.price} paid</div>
        <div>
          On date {reservation.checkInDate + " " + reservation.checkInDate}
        </div>
        <div> room already reserved </div>
      </div>
    );
  } else if (room.isAvailable) {
    return (
      <div>
        <div> {room.price}</div>
        <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          Reserve this room
        </label>
      </div>
    );
  } else if (!room.isAvailable) {
    return (
      <div>
        <div> {room.price}</div>
        <div> room not available </div>
      </div>
    );
  }
}

export default Room;
