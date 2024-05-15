import { useState } from "react";

function Room({ room, toggledRooms, setToggledRooms }) {
  const [checked, setChecked] = useState(false);

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
  return (
    <div>
      {room.price}
      {room.isAvailable ? (
        <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          Reserve this room
        </label>
      ) : (
        <div> room not available </div>
      )}
    </div>
  );
}

export default Room;
