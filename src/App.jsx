import React from "react";
import Navbar from "./components/Navbar";

export default function App({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
