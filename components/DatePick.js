import "react-datetime/css/react-datetime.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const DatePick = () => {
  // Initialize state to hold the selected date
  const [startDate, setStartDate] = useState(new Date());

  // Handle date change
  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className=" flex justify-center items-center shadow rounded px-4 py-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
          />
        </svg>

        <DatePicker
          selected={startDate}
          onChange={handleChange}
          showTimeSelect
          dateFormat="Pp"
          className="focus:border-none" // Date and time format (e.g., 09/05/2024, 2:00 PM)
        />
      </div>
      <p className="font-semibold">
        your slot is booked on
        <span className="text-red-700 pl-2">
          {format(startDate, "yyyy-MM-dd  HH:mm:ss")}
        </span>
      </p>
    </div>
  );
};

export default DatePick;