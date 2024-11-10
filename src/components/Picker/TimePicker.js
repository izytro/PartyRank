import React, { useState, useEffect } from "react";

const TimePicker = ({ value, onChange }) => {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [amPm, setAmPm] = useState("AM");

  useEffect(() => {
    console.log("Received value in TimePicker:", value);
    if (value) {
      const timeParts = value.split(" ");
      if (timeParts.length === 2) {
        const time = timeParts[0];
        const period = timeParts[1].toUpperCase();

        const [h, m] = time.split(":");

        if (h && m && !isNaN(h) && !isNaN(m)) {
          setHour(parseInt(h, 10));
          setMinute(parseInt(m, 10));
          setAmPm(period);
        }
      }
    }
  }, [value]);

  const updateTime = (hour, minute, amPm) => {
    const formattedTime = formatTime(hour, minute, amPm);
    onChange(formattedTime);
    console.log(formatTime);
  };

  const formatTime = (hour, minute, amPm) => {
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    return `${formattedHour}:${formattedMinute} ${amPm}`;
  };

  return (
    <div className="time-picker flex justify-center ">
      <input
        type="number"
        value={hour}
        onChange={(e) => {
          const newHour = parseInt(e.target.value, 10);
          setHour(newHour);
          updateTime(newHour, minute, amPm);
        }}
        min={1}
        max={12}
        className="hour-input  rounded-lg"
      />
      <span>:</span>
      <input
        type="number"
        value={minute}
        onChange={(e) => {
          const newMinute = parseInt(e.target.value, 10);
          setMinute(newMinute);
          updateTime(hour, newMinute, amPm);
        }}
        min={0}
        max={59}
        className="minute-input  rounded-lg"
      />
      <select
        value={amPm}
        onChange={(e) => {
          const newAmPm = e.target.value;
          setAmPm(newAmPm);
          updateTime(hour, minute, newAmPm);
        }}
        className="period-select ml-1  rounded-lg"
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default TimePicker;
