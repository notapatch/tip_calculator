import { classNames } from "./../utils/ClassNames"
import NumberFormat from "react-number-format";
import React from "react";

function Tips(props) {
  const tip_percents = [5, 10, 15, 25, 50]
  return (
     <div>
       <label className="text-base text-jelly-bean-300 font-bold">Select Tip %</label>
       <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
         { tip_percents.map((tip_percent) => {
           return (
             <button
               id={tip_percent}
               name="regularTip"
               onClick={() => props.handleClick(tip_percent)}
               className={ classNames(
                      "h-12 w-full lg:w-percent-button flex items-center justify-center hover:text-alto-200 hover:bg-cyan-200 text-2xl rounded",
                              tip_percent === props.regularTip ? "text-alto-200 bg-cyan-200" : "text-white bg-alto-200")
               }
             >
               {tip_percent}%
             </button>
           )
         })}

         <NumberFormat
           id="custom_tip"
           name="custom_tip"
           allowNegative={false}
           className="input lg:w-percent-button pl-4 text-center focus:text-right focus:ring focus:ring-cyan-200"
           onValueChange={values => {
             console.log(`onValueChange custom value: ${values.value}`)
             props.handleChange(values.value)
           }}
           placeholder="Custom"
           suffix="%"
           thousandSeparator={true}
           value={props.customTip}
         />

       </div>
     </div>
  )
}

export default Tips