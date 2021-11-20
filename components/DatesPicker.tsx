import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function DatesPicker() {
  const [activeDuration, setActiveDuration] = useState(false);
  const [date, setDate] = useState(null);
  const [dateDuration, setDuration] = useState([null, null]);
  const [startDate, endDate] = dateDuration;

  const years = Array.from(Array(new Date().getFullYear() - 1959), (_, i) => (i + 1980).toString());
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <>
          <div className="flex justify-center space-x-4">
            <button onClick={() => { setActiveDuration(false) }} className={`${!activeDuration && 'font-bold bg-gray-200 shadow '} rounded px-7 py-1`}>Date</button>
            <button onClick={() => setActiveDuration(true)} className={`${activeDuration && 'font-bold bg-gray-200 shadow'} rounded px-7 py-1`}>Duration</button>
          </div>
          <div className="flex justify-evenly">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="hover:bg-gray-300 rounded p-1">
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <select
              className="bg-transparent font-bold mx-1 p-1 hover:bg-gray-300 rounded appearance-none"
              value={months[date.getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              className="bg-transparent font-bold mx-1 p-1 hover:bg-gray-300 rounded appearance-none"
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="hover:bg-gray-300 rounded p-1">
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
      className="bg-transparent pr-10 cursor-pointer"
      isClearable
      placeholderText="Select a date"
      timeInputLabel="Time:"
      dateFormat={activeDuration ? 'MM/dd/yyyy' : 'MM/dd/yyyy h:mm aa'}
      showTimeInput
      selectsRange={activeDuration ? true : false}
      startDate={activeDuration ? startDate : null}
      endDate={activeDuration ? endDate : null}
      onChange={activeDuration ? (dates) => { setDuration(dates) } : (date) => setDate(date)}
      selected={activeDuration ? null : date}
    />
  );
};

export default DatesPicker;
