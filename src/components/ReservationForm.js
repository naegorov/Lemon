import React, { useState } from 'react';
import "./ReservationForm.css";

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [dineInLocation, setDineInLocation] = useState('');
  const [errors, setErrors] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    setConfirmationMessage('Reservation submitted successfully! Redirecting to homepage...');
    setName('');
    setEmail('');
    setReservationDate('');
    setReservationTime('');
    setOccasion('');
    setNumberOfGuests('');
    setDineInLocation('');
    // Redirect to homepage after 2 seconds
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  const validateForm = () => {
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }
    
    if (reservationDate === '') {
      errors.reservationDate = 'Reservation date is required';
    }

    if (reservationTime === '') {
      errors.reservationTime = 'Reservation time is required';
    }

    if (occasion.trim() === '') {
      errors.occasion = 'Occasion is required';
    }

    if (numberOfGuests.trim() === '') {
      errors.numberOfGuests = 'Number of guests is required';
    } else if (!isValidNumber(numberOfGuests)) {
      errors.numberOfGuests = 'Invalid number format';
    }

    if (dineInLocation === '') {
      errors.dineInLocation = 'Dine-in location is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidNumber = (value) => {
    const numberRegex = /^\d+$/;
    return numberRegex.test(value);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="reservationDate">Reservation Date:</label>
        <input
          type="date"
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
          required
        />
        {errors.reservationDate && <span className="error">{errors.reservationDate}</span>}
      </div>
      <div>
        <label htmlFor="reservationTime">Reservation Time:</label>
        <input
          type="time"
          id="reservationTime"
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
          required
        />
        {errors.reservationTime && <span className="error">{errors.reservationTime}</span>}
      </div>
      <div>
        <label htmlFor="occasion">Occasion:</label>
        <input
          type="text"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        />
        {errors.occasion && <span className="error">{errors.occasion}</span>}
      </div>
      <div>
        <label htmlFor="numberOfGuests">Number of Guests:</label>
        <input
          type="number"
          id="numberOfGuests"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
          required
        />
        {errors.numberOfGuests && <span className="error">{errors.numberOfGuests}</span>}
      </div>
      <div>
        <label htmlFor="dineInLocation">Dine-in Location:</label>
        <select
          id="dineInLocation"
          value={dineInLocation}
          onChange={(e) => setDineInLocation(e.target.value)}
          required
        >
          <option value="">Select Location</option>
          <option value="inside">Inside</option>
          <option value="outside">Outside</option>
        </select>
        {errors.dineInLocation && <span className="error">{errors.dineInLocation}</span>}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default ReservationForm;
