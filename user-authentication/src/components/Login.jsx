import React from "react";

const Login = (props) => {
  const { login, onChangeLoginHandler, onSubmitLoginHandler, loginError } =
    props;
  return (
    <form onSubmit={onSubmitLoginHandler}>
      <h1>Login</h1>
      {loginError.message && <label>{loginError.message}</label>}
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={login.username}
        onChange={onChangeLoginHandler}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={login.password}
        onChange={onChangeLoginHandler}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
