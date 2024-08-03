import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SlideMenu from "./components/SlideMenu";
import MainSec from "./components/MainSec";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Navbar setShow={setShow} />
      <SlideMenu show={show} setShow={setShow} />
      <MainSec />
    </div>
  );
}

export default App;
