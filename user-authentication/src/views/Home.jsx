import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
const defaultRegisterForm = {
  username: "",
  password: "",
  confirmPassword: "",
};
const defaultLoginForm = {
  username: "",
  password: "",
};
const Home = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [loginError, setLoginError] = useState({});
  const [register, setRegister] = useState(defaultRegisterForm);
  const [authenticated, setAuthenticated] = useState(false);
  const [login, setLogin] = useState(defaultLoginForm);
  const navigate = useNavigate();
  useEffect(() => {
    // remove comment to clear collection
    // axios
    //   .post("api/clearData")
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
    axios
      .get("/api/user", { withCredentials: true })
      .then((res) => {
        console.log(`logged in as ${res.data.username}`);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authenticated]);

  const onSubmitRegisterHandler = (e) => {
    e.preventDefault();
    if (
      register.username == "" ||
      register.password == "" ||
      register.confirmPassword == ""
    ) {
      setError({ message: "password cannot be blank! " });
      return;
    }
    if (register.password !== register.confirmPassword) {
      setError({ message: "Confirm Password does not match!" });
      return;
    }
    axios
      .post("/api/register", register, { withCredentials: true })
      .then((res) => {
        console.log("register complete");
        // setRegister(defaultRegisterForm);
        // setError({});
        setAuthenticated(true);
      })
      .catch((err) => {
        console.log("register error");
        setError(err.response.data);
        console.log(err.response.data);
      });
  };

  const onChangeRegisterHandler = (e) => {
    const newUser = { ...register };
    newUser[e.target.name] = e.target.value;
    setRegister(newUser);
  };

  const onSubmitLoginHandler = (e) => {
    e.preventDefault();
    // if (login.username == "" || login.password == "") return;

    axios
      .post("/api/login", login, { withCredentials: true })
      .then((res) => {
        console.log("Login Request Sent");
        console.log(res);
        // setError({});
        setAuthenticated(true);
      })
      .catch((err) => {
        console.log("Login Request Error");
        console.log(err);
        setLoginError(err.response.data);
      });
  };

  const onChangeLoginHandler = (e) => {
    const user = { ...login };
    user[e.target.name] = e.target.value;
    setLogin(user);
  };
  const logout = () => {
    axios
      .post("/api/logout", {}, { withCredentials: true })
      .then((res) => {
        setUser({});
        setRegister(defaultRegisterForm);
        setError({});
        setLoginError({});
        setLogin(defaultLoginForm);
        setAuthenticated(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {user.username ? (
        <>
          <p>User: {user.username}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <form onSubmit={onSubmitRegisterHandler}>
            <h1>Register</h1>
            {error.message && <label htmlFor="username">{error.message}</label>}
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
          <Login
            onChangeLoginHandler={onChangeLoginHandler}
            login={login}
            loginError={loginError}
            onSubmitLoginHandler={onSubmitLoginHandler}
          />
        </>
      )}
    </>
  );
};

export default Home;
