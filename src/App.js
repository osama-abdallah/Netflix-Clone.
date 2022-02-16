import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nbar from "./components/Navbar";
// import Movie from "./components/Movie";
// import ModalMovie from "./components/ModalMovie";
import FavList from "./components/FavList";

export default function App() {
  return (
    <>
    <Nbar/>
    {/* <Header /> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList />} />
      </Routes>
    </>
  );
}