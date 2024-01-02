import React from "react";
import "./warning.css";
import { useSelector } from "react-redux";

export default function Warning() {
  const name = useSelector((state) => state.user.name);
  const greeting = useSelector((state) => state.user.greeting);
  return (
    <div className="warning">
      <p>{greeting},</p>
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  );
}
