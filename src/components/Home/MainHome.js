import React, { useState } from "react";

export default function MainHome() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Home">
      <div className="overlay"></div>
      <h1 className="title">All the best for you</h1>
      <h2 className="subtitle">at low prices</h2>
      <div className="content">
        <p>Discover the best deals on your favorite products.</p>
        <a href="/products" className="btn">Shop Now</a>
      </div>
      <button className="video-btn" onClick={openModal}>Watch Video</button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}