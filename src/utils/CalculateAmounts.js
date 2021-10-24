function calculateAmounts(bill, regularTip, customTip, people) {
  if ((bill === "") || (regularTip + customTip === ""  ) || (people === "")) {
    return {
      tipAmountPerPerson:  "",
      totalAmountPerPerson: "",
    }
  }

  const billAsNumber = parseFloat(bill)
  const peopleAsNumber = parseInt(people)
  const mergedTipAsPercent = (regularTip + customTip) / 100

  return {
    tipAmountPerPerson:  billAsNumber * mergedTipAsPercent / peopleAsNumber,
    totalAmountPerPerson: (billAsNumber * mergedTipAsPercent + billAsNumber) / peopleAsNumber
  }
}

export default calculateAmounts