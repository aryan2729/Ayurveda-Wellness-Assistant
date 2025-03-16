import React from "react";
import Header from "./components/Header/Header.jsx";
import Chatbot from "./components/Chatbot/Chatbot.jsx";
import Diagnostic from "./components/Diagnostic/Diagnostic.jsx";
import ECommerce from "./components/ECommerce/ECommerce.jsx";
import Footer from "./components/Footer/Footer.jsx"; // Import the Footer component
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Chatbot />
      <Diagnostic />
      <ECommerce />
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;