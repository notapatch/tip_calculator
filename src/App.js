import React, { useState } from 'react'
import './index.css';
import logo from './logo.svg'
import Bill from "./components/Bill"
import Tips from "./components/Tips"
import NumberOfPeople from "./components/NumberOfPeople"
import CalculationCard from "./components/CalculationCard"
import calculateAmounts from "./utils/CalculateAmounts"

function App() {
  const [bill, setBill] = useState("")
  const [billErrorMessage, setBillErrorMessage] = useState("")
  const [regularTip, setRegularTip] = useState("")
  const [customTip, setCustomTip] = useState("")
  const [people, setPeople] = useState("")
  const [peopleErrorMessage, setPeopleErrorMessage] = useState("")

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

  const handlePeopleChange = (value) => {
    if (value !== "0") {
      setPeopleErrorMessage("")
    } else {
      setPeopleErrorMessage("Can't be zero.")
    }

    setPeople(value)
  }

  const handleReset = () => {
    setBill("")
    setRegularTip("")
    setCustomTip("")
    setPeople("")
  }

  const checkResetDisabled = () => {
    return bill + regularTip + customTip + people === ""
  }

  const output = calculateAmounts(bill, regularTip, customTip, people)

  return (
    <div className="App font-mono bg-emperor-300 my-auto">
      <header className="h-36 flex justify-center items-center">
        <img src={logo} className="h-12" alt="logo" />
      </header>
      <section className="bg-white rounded-t-3xl lg:rounded-b-3xl border max-w-lg-app mx-auto">
        {/*border added to section to stop margin collapse with inner div*/}

        <div className="m-8 lg:m-0 grid lg:grid-cols-2">
          <div className="lg:m-12">
            {/*form wrapper*/}
            <Bill bill={bill} handleChange={handleChangeBill} errorMessage={billErrorMessage} />

            <div className="mt-10">
              <Tips
                handleClick={handleRegularTips}
                regularTip={regularTip}
                handleChange={handleCustomTip}
                customTip={customTip} />
            </div>

            <div className="mt-8 ">
              <NumberOfPeople people={people} handleChange={handlePeopleChange} errorMessage={peopleErrorMessage} />
            </div>
          </div>

          <div className="mt-8 lg:my-8 lg:mr-8">
            <CalculationCard output={output} handleClick={handleReset} checkResetDisabled={checkResetDisabled} />
          </div>
        </div>
     </section>
   </div>
  );
}

export default App;
