import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SearchChanged } from "@/components/SearchChanged";
import { Mission } from "@/components/Mission";
import { Solution } from "@/components/Solution";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Landing = () => (
  <div className="bg-background text-foreground min-h-screen" data-testid="landing-page">
    <Navbar />
    <Hero />
    <SearchChanged />
    <Mission />
    <Solution />
    <CTA />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
