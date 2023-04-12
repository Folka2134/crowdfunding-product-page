import { useState } from "react";

import "./App.css";
import logo from "./assets/images/logo.svg";
import hamburger from "./assets/images/icon-hamburger.svg";
import close from "./assets/images/icon-close-modal.svg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App h-full font-comissioner">
      <div className="h-96 bg-mobile-banner md:bg-desktop-banner">
        <nav className="flex justify-between items-center px-10 md:px-40 lg:px-52 xl:px-72 2xl:px-[20rem] py-10">
          <img src={logo} alt="logo" />
          {menuOpen ? (
            <img
              className="block md:hidden h-5 cursor-pointer text-white"
              src={close}
              alt="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <img
              className="block md:hidden h-5 cursor-pointer"
              src={hamburger}
              alt="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
          {/* desktop nav */}
          <ul className="hidden md:flex text-white font-[500]">
            <li className="px-3 cursor-pointer">About</li>
            <li className="px-3 cursor-pointer">Discover</li>
            <li className="px-3 cursor-pointer">Get Started</li>
          </ul>
          {/* mobile nav */}
        </nav>
        {menuOpen && (
          <ul className="bg-white mx-10 rounded-lg text-lg font-[700]">
            <li className="border-b-2 p-5 cursor-pointer active:bg-white hover:bg-[#3CB4AC] hover:text-white rounded-lg transition-colors">
              About
            </li>
            <li className="border-b-2 p-5 cursor-pointer active:bg-white hover:bg-[#3CB4AC] hover:text-white rounded-lg transition-colors">
              Discover
            </li>
            <li className="p-5 cursor-pointer active:bg-white hover:bg-[#3CB4AC] hover:text-white rounded-lg transition-colors">
              Get Started
            </li>
          </ul>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default App;
