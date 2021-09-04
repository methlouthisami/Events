import React from "react";



function App() {
    const names = ["Music", "John", "Paul", "Ringo", "George"];
  return (
    <div>
      <h1>SMÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙ</h1>

           <h1>SMÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙ</h1>
           <h1>SMÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙ</h1>
           <h1>SMÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙ</h1>
      <h1>SMÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙ</h1>
      <h1>SMÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙÙ</h1>
      {names
        .filter((name) => name.includes("P"))
        .map((filteredName) => (
          <li className="mb-3">{filteredName}</li>
        ))}
    </div>
  );
}

export default App;
