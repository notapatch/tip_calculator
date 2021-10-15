import React, { useState } from 'react'
import './index.css';
import logo from './logo.svg'

function App() {
  const [bill, setBill] = useState(0)

  const handleChangeBill = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value === '')
      return;

    console.log("bill:" + bill)
    setBill(value);
  };

  return (
    <div className="App font-mono bg-emperor-300">
      <header className="h-36 flex justify-center items-center">
        <img src={logo} className="h-12" alt="logo" />
      </header>
      <section className="bg-white rounded-t-3xl border">
        {/*border added to section to stop margin collapse with inner div*/}

        <div className="m-8">
          {/*form wrapper*/}

        </div>
     </section>
   </div>
  );
}

export default App;
