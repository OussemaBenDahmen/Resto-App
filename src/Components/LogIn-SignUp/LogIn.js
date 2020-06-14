import React, { useState } from "react";
import { LogInApi } from "../../ApiRequests/ApiRequests";
import { useDispatch } from "react-redux";
import LoginModalCloseAction from "../../Actions/LoginModalAction/LoginModalCloseAction";
export const LogIn = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="Login-SignupBacground">
      <form className="LogInForm">
        <input
          className="FormInput"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="FormInput"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(LogInApi({ Email: Email, Password: Password }));
          }}
        >
          LogIn
        </button>
        <button onClick={() => dispatch(LoginModalCloseAction())}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default LogIn;
