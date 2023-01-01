import React from "react";
import Calculator from "./pages/Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import NoteApp from "./pages/NoteApp";
import WeatherApp from "./pages/WeatherApp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/noteapp" element={<NoteApp />} />
          <Route path="/weatherapp" element={<WeatherApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
