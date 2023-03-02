import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../data"; 
import "./movieTiming.css";
import BsContext from "../context/Context";

const TimeShedule = () => {
  const context = useContext(BsContext);

  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    // this will used to update the selected time and store in localstorage
    changeTime(value);
    window.localStorage.setItem("slot", value);
  };

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Schedule :-</h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            // rendering the radio component on each time slot
            return (
              <RadioComponent
                text={el}
                changeSelection={handleChangeTime}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeShedule;
