import React, { useState } from "react";
import "./App.css";

function OrganDonation() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [medication, setMedication] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Date of birth: ${dob}`);
    console.log(`Phone number: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Medication: ${medication}`);
    console.log(`Address: ${address}`);
  };

  return (
    <div className="form-container">
      <h1>Organ Donation Form</h1>
      <div className="image-container">
        <img
          src="https://t3.ftcdn.net/jpg/01/70/23/78/240_F_170237839_dbHJ3f0XRzdE2lBqawHRVpajlnCxw4AP.jpg"
          alt="Organ Donation"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="medication">Medication:</label>
          <textarea
            id="medication"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OrganDonation;




