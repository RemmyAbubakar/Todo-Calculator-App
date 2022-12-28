import React from "react";
import Calculator from "./pages/Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
