import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login";
import "../../styles/Entry.css";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the form!");
    }
    //TODO call api to submit form
  };

  return (
    <div className="entry-page bg-info">
      <div className="form-box h-20 p-5 bg-light border rounded-3 text-start">
        <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          email={email}
          password={password}
        />
      </div>
    </div>
  );
};
