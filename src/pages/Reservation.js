import React from "react";
import { useNavigate } from "react-router-dom";
import Restaurant from "../assets/Restaurant.jpg";
import ReservationForm from "../components/ReservationForm";
import "./Reservation.css";

const Reservation = () => {
  const navigate = useNavigate();

  return (
    <main className="reservation">
      <h1>Reserve your table</h1>
      <section>
        <img
          src={Restaurant}
          alt="Outdoor"
          style={{ borderRadius: "8px", width: "35%" }}
        />
      </section>
      <br/><br/>
      <section>
        <ReservationForm navigate={navigate} />
      </section>
    </main>
  );
};

export default Reservation;
