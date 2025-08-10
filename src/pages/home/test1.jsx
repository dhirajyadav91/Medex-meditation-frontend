import React from "react";
import Header from "../../components/headerSection/header";
import HeroSection from "../../components/heroSection/heroSection";
import Footer from "../../components/footerSections/footer";
import Sessions from "./sessions";

function Home() {
  return (
    <div className="bg-gray-200">
      <Header />
      <Sessions />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;
