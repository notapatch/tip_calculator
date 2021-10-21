import React, { useState } from 'react'
import './index.css';
import logo from './logo.svg'
import Bill from "./components/Bill"
import Tips from "./components/Tips"

function App() {
  const [bill, setBill] = useState("")
  const [billErrorMessage, setBillErrorMessage] = useState("")
  const [regularTip, setRegularTip] = useState("")
  const [customTip, setCustomTip] = useState("")

  const handleChangeBill = (value) => {
    if (value !== "0") {
      setBillErrorMessage("")
    } else {
      setBillErrorMessage("Can't be zero.")
    }

    setBill(value);
  };

  const handleRegularTips = (value) => {
    setCustomTip("")
    setRegularTip(parseInt(value))
  }

  const handleCustomTip = (value) => {
    setRegularTip("")
    setCustomTip(parseFloat(value))
  }

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

          <div className="mt-10">
            <Tips
              handleClick={handleRegularTips}
              regularTip={regularTip}
              handleChange={handleCustomTip}
              customTip={customTip} />
          </div>
        </div>
     </section>
   </div>
  );
}

export default App;
