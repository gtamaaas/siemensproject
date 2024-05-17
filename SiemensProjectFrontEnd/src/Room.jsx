import { useState } from "react";

function Room({ room, toggledRooms, setToggledRooms }) {
  const [checked, setChecked] = useState(false);
  const [isReserved, SetIsreserved] = useState(false);

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

  if (isReserved) {
    return (
      <div>
        <div> {room.price}</div>
        <div> room already reserved </div>
      </div>
    );
  } else if (room.isAvailable) {
    return (
      <div>
        <div> {room.price}</div>
        <label>
          <input
            type="checkbox"
            name={room.roomNumber}
            id={room.roomNumber}
            checked={checked}
            onChange={handleChange}
          />
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
