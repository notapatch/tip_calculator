
function calculationCard() {

  return (
    <div className="bg-alto-200 grid grid-cols-2 px-6 pt-9 rounded-xl">
      <label className="text-white">Tip Amount
        <span className="block text-granny-smith-200 text-sm">/ person</span>
      </label>
      <div className="text-3xl font-bold text-cyan-200 text-right">
        $4.27
      </div>
      <label className="text-white mt-6">Total
        <span className="block text-granny-smith-200 text-sm">/ person</span>
      </label>
      <div className="mt-6 text-3xl font-bold text-cyan-200 text-right">
        $32.79
      </div>
      <div className="col-span-2 mt-8 mb-6">
        <button
          className="h-12 w-full flex items-center justify-center text-alto-200 bg-cyan-200 hover:bg-cyan-100 text-xl font-bold rounded"
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default calculationCard