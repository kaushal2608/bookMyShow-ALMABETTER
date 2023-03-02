
import LastBookingDetails from "../components/LastBookingDetails";
import SelectMovie from "../components/MovieSelection";
import SelectSeats from "../components/SelectSeats";
import TimeShedule from "../components/MovieTiming";
import Modal from "../components/ErrorModal";
import "./Home.css";
import BsContext from "../context/Context";
import { useContext } from "react";

const Home = (props) => {
  //here we are getting required data using usecontext hook
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
    changeNoOfSeats,
  } = context;

  // this is the function to check negative count of seat
  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };

  // this function will check weather all seats are zero or not
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  // this function will handle booking process
  const handleBookNow = () => {
    // this will check the movie is selected
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select a movie!");
    }
    // this will check the selection of time slot
    else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    }
    // here we are checking wether all seat count is negative or the seat count is zero
    else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      setErrorPopup(true);
      setErrorMessage("Invalid Seats!");
    }
    // if all validation is passed the seat will get book
    else {
      handlePostBooking();
      changeNoOfSeats({}); // reset the no of seats after booking
    }
  };

  return (
    <>
      <Modal />
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div className="select_movie_component">
              <SelectMovie />
            </div>
            <div className="last_booking_details_container">
              <LastBookingDetails />
            </div>
          </div>
          <div className="time_seats_container">
            <TimeShedule />
            <SelectSeats />
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
