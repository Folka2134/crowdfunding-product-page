import { useState } from "react";

import "./App.css";
import logo from "./assets/images/logo.svg";
import mastercraftLogo from "./assets/images/logo-mastercraft.svg";
import hamburger from "./assets/images/icon-hamburger.svg";
import close from "./assets/images/icon-close-modal.svg";
import bookmark from "./assets/images/icon-bookmark.svg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App h-full font-comissioner">
      <div className="h-96 bg-mobile-banner md:bg-desktop-banner bg-cover">
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
      <div className="w-full flex flex-col justify-center items-center absolute top-80">
        <div className="flex flex-col justify-center mb-6 p-12 bg-white rounded-lg shadow-lg w-96 sm:min-w-[600px] md:min-w-[700px]">
          <div className="flex justify-center">
            <img
              className="h-14 w-14 -top-8 absolute"
              src={mastercraftLogo}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-bold">
              Mastercraft Bamboo Monitor Riser
            </h2>
            <p className="text-[#7A7A7A] py-6">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="flex justify-between w-full">
              <button className="text-white font-bold bg-[#3CB4AC] active:bg-[#147B74] py-4 px-10 rounded-full">
                Back this project
              </button>
              <button className="flex items-center relative">
                <img src={bookmark} alt="bookmark" />
                <span className="hidden sm:block text-sm font-bold bg-gray-200 rounded-full p-3 px-4">
                  Bookmark
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-lg w-96 sm:min-w-[600px] md:min-w-[700px]">
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center text-center md:text-left p-12 pb-0 md:pb-6 m-5 md:m-0">
            <div className="flex flex-col pb-5 md:pb-0 border-b md:border-0 border-gray-300">
              <h3 className="text-3xl font-bold mb-2">$89,914</h3>
              <p className="text-[#7A7A7A] text-sm">of $100,000 backed</p>
            </div>
            <div className="flex flex-col py-5 md:py-0 border-b md:border-0 border-gray-300">
              <h3 className="text-3xl font-bold mb-2">5,007</h3>
              <p className="text-[#7A7A7A] text-sm">total backers</p>
            </div>
            <div className="flex flex-col py-5 md:py-0">
              <h3 className="text-3xl font-bold mb-2">56</h3>
              <p className="text-[#7A7A7A] text-sm">days left</p>
            </div>
          </div>
          <div className="pb-6 pl-12">progress bar</div>
        </div>
        <div>about this project</div>
      </div>
    </div>
  );
}

export default App;
// $89,914 of $100,000 backed
// 5,007 total backers
// 56 days left
