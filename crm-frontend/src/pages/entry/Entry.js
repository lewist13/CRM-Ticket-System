import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login";
import { ForgotPassword } from "../../components/ForgotPassword/ForgotPassword";
import "../../styles/Entry.css";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

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
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Please enter the email!");
    }

    //TODO call api to submit form
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="form-box h-20 p-5 bg-light border rounded-3 text-start">
        {formLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          />
        )}

        {formLoad === "reset" && (
          <ForgotPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};
