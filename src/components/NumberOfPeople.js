import person from "../assets/images/icon-person.svg"
import NumberFormat from "react-number-format"
import { classNames } from "./../utils/ClassNames"

function NumberOfPeople (props) {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor="number_of_people" className="block text-base font-bold text-jelly-bean-300">
          Number of People
        </label>
        {props.errorMessage && <p className="text-error-200 font-bold">{props.errorMessage}</p>}
      </div>
     <div className="mt-1.5 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-jelly-bean-200 text-lg">
                      <img src={person} className="h-4" alt="logo" />
                    </span>
        </div>
        <NumberFormat
          id="number_of_people"
          name="number_of_people"
          allowNegative={false}
          className={
            classNames("input pl-9 text-right",
              props.errorMessage ? "border-2 border-error-200" : "focus:ring focus:ring-cyan-200")
          }
          onValueChange={(values) => {
            props.handleChange(values.value)
          }}
          placeholder="0"
          value={props.people}
        />
      </div>
    </div>
  )
}

export default NumberOfPeople