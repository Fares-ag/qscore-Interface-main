import React, { useState } from "react";
import "./DisputeMessage.css";
import DisputeCard from "./components/DisputeCard";

const DisputeMessage = () => {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const disputesData = [
    {
      ticketId: "00001",
      customerName: "Iftikar Ahmed",
      issueDescription: "Inspection time too long",
      customerEmail: "iftikar@gmail.com",
      customerPhone: "3367 3710",
      appointmentDate: "25 Jan 2025",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(message);
    setMessage(""); // Clear the input after submission
  };

  return (
    <div>
      {disputesData.map((dispute) => (
        <>
          <DisputeCard
            key={dispute.ticketId}
            ticketId={dispute.ticketId}
            customerName={dispute.customerName}
            issueDescription={dispute.issueDescription}
            customerEmail={dispute.customerEmail}
            customerPhone={dispute.customerPhone}
            appointmentDate={dispute.appointmentDate}
          />
          <DisputeMessage />
        </>
      ))}
      <div className="message-box-container">
        <h2 className="message-box-title">Message</h2>
        <form onSubmit={handleSubmit} className="message-box-form">
          <textarea
            className="message-box-textarea"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={handleInputChange}
          />
        </form>
        {submittedMessage && (
          <div className="message-box-display">
            <h3 className="message-box-subtitle">Your Message:</h3>
            <p>{submittedMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisputeMessage;
