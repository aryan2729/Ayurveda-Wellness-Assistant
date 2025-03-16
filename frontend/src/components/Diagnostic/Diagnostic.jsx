import React, { useState } from "react";
import "./Diagnostic.css";

function Diagnostic() {
  const [report, setReport] = useState("");

  const generateReport = () => {
    setReport("Your personalized Ayurvedic health report will appear here.");
  };

  return (
    <div className="diagnostic">
      <h2>AI-Driven Diagnostic</h2>
      <button onClick={generateReport}>Generate Report</button>
      <div className="report">{report}</div>
    </div>
  );
}

export default Diagnostic;