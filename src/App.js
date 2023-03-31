import Navbar from "./components/navbar";
import "./App.css";

import Sidebar from "./components/sidebar";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import AddVideo from "./components/addvideo";
import Livevideos from "./components/live";
import Archivevideos from "./components/archive";
import Draft from "./components/draft";
import SearchVideo from "./components/scearchedFiles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="homepage">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addVideo" element={<AddVideo />}></Route>
          <Route path="/live" element={<Livevideos />}></Route>
          <Route path="/archive" element={<Archivevideos />}></Route>
          <Route path="/draft" element={<Draft />}></Route>
          <Route path="/SearchVideos" element={<SearchVideo />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
