import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import LiveEvents from "./pages/liveEvents ";
import Monetize from "./pages/Monetize";
import Showcases from "./pages/Showcases";
import Analytics from "./pages/Analytics";
import Sidebar from "./components/Sidebar";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/liveEvents" element={<LiveEvents />} />
            <Route path="/Showcases" element={<Showcases />} />
            <Route path="/Monetize" element={<Monetize />} />
            <Route path="/Analytics" element={<Analytics />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
