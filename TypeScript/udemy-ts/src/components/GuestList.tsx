import React, { useState } from "react";

const GuestList = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  function addGuest() {
    setGuests([...guests, name]);
    setName("");
  }
  return (
    <div>
      {guests.map((name, idx) => (
        <p key={idx}>{name}</p>
      ))}
      <input
        type="text"
        value={name}
        name="value"
        placeholder="Guest Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addGuest}>Add Guest</button>
    </div>
  );
};

export default GuestList;
