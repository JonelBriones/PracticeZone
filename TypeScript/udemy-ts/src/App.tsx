import React from "react";
import Parent from "./props/Parent";
import GuestList from "./components/GuestList";
import UserSearch from "./components/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
      {/* <GuestList /> */}
    </div>
  );
};

export default App;
