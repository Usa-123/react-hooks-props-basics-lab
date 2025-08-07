// src/components/App.js
import React from "react";
import user from "../data/user";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
