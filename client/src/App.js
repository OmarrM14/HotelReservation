// React & Router V6
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import Home from "./pages/home/Home";
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from './pages/Login/Login'
import 'animate.css';
import SignUp from './pages/Register/signup';
import Home2 from './pages/home/home2/Home';
import List1 from './pages/list1/List1';
import List2 from './pages/list2/List2';
import List3 from './pages/list3/List3';
import Home3 from './pages/home/home3/Home3';

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// Example
scrollToTop();

function App() {

  return (
    // Route page 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<Home2 />} />
        <Route path="/3" element={<Home3 />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hurgada" element={<List1 />} />
        <Route path="/Sh" element={<List2 />} />
        <Route path="/dahab" element={<List3 />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
