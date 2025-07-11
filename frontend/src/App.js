import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Map from './pages/Map.js';
import Profile from './pages/Profile.js';
import Search from './pages/Search.js';
import Signup from './pages/Signup.js';
import AddEvent from './pages/AddEvent.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="map" element={<Map/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="search" element={<Search/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="addevent" element={<AddEvent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
