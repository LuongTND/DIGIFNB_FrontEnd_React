import React from "react";
import Index from "./pages/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/datatabels" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
