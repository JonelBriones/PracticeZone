import React, { useEffect, useRef, useState } from "react";

const users = [
  { name: "jonel", age: 20 },
  { name: "josh", age: 20 },
  { name: "paul", age: 20 },
];

const UserSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // can either be a type of html element or null
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  function searchInput() {
    const foundUser = users.find((user) => user.name == search);
    if (!foundUser) return;
    setUser(foundUser);
    setSearch("");
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        {user && (
          <p>
            {user.name} is {user.age}
          </p>
        )}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={search}
        name="search"
        onChange={onChangeHandler}
      />
      <button onClick={searchInput}>Search</button>
    </>
  );
};

export default UserSearch;
