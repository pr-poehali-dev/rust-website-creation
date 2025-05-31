import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
