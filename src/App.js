import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Movie from "./components/Movie";
// import ModalMovie from "./components/ModalMovie";
import FavList from "./components/FavList";

export default function App() {
  return (
    <>
    {/* <Header /> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList />} />
      </Routes>
    </>
  );
}