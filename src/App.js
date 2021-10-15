import React, { useState } from 'react'
import './index.css';
import logo from './logo.svg'
import Bill from "./components/Bill"

function App() {
  const [bill, setBill] = useState("")
  const [billErrorMessage, setBillErrorMessage] = useState("")

  const handleChangeBill = (value) => {
    if (value !== "0") {
      setBillErrorMessage("")
    } else {
      setBillErrorMessage("Can't be zero.")
    }

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
          <Bill bill={bill} handleChange={handleChangeBill} errorMessage={billErrorMessage} />
        </div>
     </section>
   </div>
  );
}

export default App;
