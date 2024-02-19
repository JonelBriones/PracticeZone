import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";
const defaultRegisterForm = {
  username: "",
  password: "",
  confirmPassword: "",
};
function App() {
  const [register, setRegister] = useState(defaultRegisterForm);

  const onSubmitRegisterHandler = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = { register };
    axios
      .post("http://localhost:8000/create", {
        username,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log("Request Sent");
        console.log(res);
      })
      .catch((err) => {
        console.log("Request Error");
        console.log(err);
      });
  };

  const onChangeRegisterHandler = (e) => {
    const newUser = { ...register };
    newUser[e.target.name] = e.target.value;
    setRegister(newUser);
  };
  return (
    <>
      <form onSubmit={onSubmitRegisterHandler}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={register.username}
          onChange={onChangeRegisterHandler}
          minLength={3}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={register.password}
          onChange={onChangeRegisterHandler}
          minLength={5}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={register.confirmPassword}
          onChange={onChangeRegisterHandler}
          minLength={5}
        />
        <button type="submit">Register</button>
      </form>
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
