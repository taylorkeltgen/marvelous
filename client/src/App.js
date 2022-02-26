import React, { Component }  from 'react';
import './App.css';
import Footer from "./components/Footer";
import FeaturedHero from "./components/FeaturedHero";
import Search from "./components/Search";
import { Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Search />
      <FeaturedHero />
      <Footer />
      
    </>
  );
}

export default App;
