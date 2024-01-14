import React from "react";
import HeroSection from "./components/HeroSection";
import Event from "./components/Event";
import Avatar from "./components/Avatar";
import FutureNetwork from "./components/FutureNetwork";
import Job from "./components/Job";
import Animate from "./components/Animate";
export default function App() {
  return (
    <div>
      <HeroSection />
      <Job />
      <Animate />
      <FutureNetwork />
      <Event />
    </div>
  );
}
