import React from "react";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App grain" data-testid="app-root">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Stack />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
