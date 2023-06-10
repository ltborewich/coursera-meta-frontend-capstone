import React from "react";
import Hero from "../components/Hero/Hero";
import Specials from ".././components/Specials/Specials";
import Testimonials from ".././components/Testimonials/Testimonials";
import Aboutme from ".././components/Aboutme/AboutMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <Aboutme />
    </>
  );
}
