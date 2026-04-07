import React from "react";

function Homepage() {
  const loggedIn = false;

  if (loggedIn) {
    return (
      <div>
        <button>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <button>Login</button>
      </div>
    );
  }
}

export default Homepage;