import { useState } from "react";

function Room({ room }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
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
