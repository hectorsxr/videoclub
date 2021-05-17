import React from "react";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import Detail from "./pages/Detail"

export default function App() {
  return (
    <div>
        <RegisterForm />
        <LoginForm />
        <Detail />
    </div>
  );
}