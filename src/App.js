import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import PassionsCard from "./component/PassionsCard";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Foot from "./component/Foot";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto mt-[35px] ">

        <Navbar />
        <Hero />
        <PassionsCard />
        <Portfolio />
        <Contact />
      </div>
      <Foot />
    </div>
  );
}

export default App;

// bg-red-300
// sm:bg-slate-300
// md:bg-blue-300
// lg:bg-red-800
// xl:bg-blue-800
// 2xl:bg-green-800
