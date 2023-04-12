import "./App.css";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="App h-full">
      <div className="h-96 bg-mobile-banner md:bg-desktop-banner">
        <nav className="flex justify-between px-6 md:px-40 lg:px-52 xl:px-72 2xl:px-[20rem] py-10">
          <img src={logo} alt="logo" />
          <ul className="flex text-white font-comissioner font-[500]">
            <li className="px-3">About</li>
            <li className="px-3">Discover</li>
            <li className="px-3">Get Started</li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
}

export default App;
