import React from "react";
import NumberFormat from "react-number-format";
import {classNames} from "../utils/ClassNames";

function Bill(props) {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor="bill" className="block text-base font-bold text-jelly-bean-300">
          Bill
        </label>
        {props.errorMessage && <p className="text-error-200 font-bold">{props.errorMessage}</p>}
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-jelly-bean-200 text-lg">$</span>
        </div>
        <NumberFormat
          id="bill"
          name="bill"
          allowNegative={false}
          className={
            classNames(
            "input pl-9 text-right",
             props.errorMessage ? "border-2 border-error-200" : " focus:ring focus:ring-cyan-200 "
          )}
          onValueChange={values => props.handleChange(values.value)}
          placeholder="0"
          renderText={(value, props) => <div {...props}>{value}</div>}
          thousandSeparator={true}
          value={props.bill}
        />
      </div>
    </div>
  )
}

export default Bill