import React from "react-dom";

export default function Signin() {
  return (
    <div>
      <div>
        <img alt="Avatar" src={require("../media/images/avatar.png")} />
      </div>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="type Username"
          id="username"
          name="username"
        />
        <button>Sign-in</button>
      </form>
    </div>
  );
}
