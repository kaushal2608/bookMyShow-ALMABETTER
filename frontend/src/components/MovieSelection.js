import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../data";
import BsContext from "../context/Context";
import "./movieSelection.css";

const SelectMovie = () => {
  const context = useContext(BsContext);

  const { movie, changeMovie } = context;

  // this will handle the change of selected movie
  const handleChangeMovie = (value) => {
    // used to update the selected movie
    changeMovie(value);

    // this will store the selected movie in local storage
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      {/* used to display heading*/}
      <h1 className="SM_heading">Select a Movie :-</h1>

      {/* this will display the selected movie option */}
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;
