import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Change, defaultHero, navItems } from "./utils/constants";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import StarWars from "./pages/StarWars";
import Contact from "./pages/Contact";
import { AppContext } from "./utils/context";
// import Users from "./components/Users";

function App() {
  // const [currentPage, setCurrentPage] = useState<string>(navItems[0]);
  // const [id, setId] = useState(1);
  const [hero, setHero] = useState(defaultHero);

  // const changePage: Change = (page) => setCurrentPage(page);

  return (
    <div className="container-fluid">
      {/* <Users userId={id} change={setId} /> */}
      <AppContext.Provider value={{ hero, changeHero: setHero }}>
        <Header />
        <Main />
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
