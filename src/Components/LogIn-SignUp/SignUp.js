import React, { useState } from "react";
import { SignUpApi } from "../../ApiRequests/ApiRequests";
import { useDispatch } from "react-redux";
import SignUpModalCloseAction from "../../Actions/SignUpModalAction/SignupModalClose";
export const SignUp = (props) => {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="Login-SignupBacground">
      <form className="LogInForm">
        <input
          className="FormInput"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="FormInput"
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
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
            dispatch(
              SignUpApi({
                userName: Name,
                Address: Address,
                userEmail: Email,
                password: Password,
                role: "Client",
              })
            );
          }}
        >
          LogIn
        </button>
        <button onClick={() => dispatch(SignUpModalCloseAction())}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SignUp;
