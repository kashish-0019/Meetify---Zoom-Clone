import React from "react";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth?mode=signin");
  };

  const handleRegisterClick = () => {
    navigate("/auth?mode=signup");
  };

  const handleGuestClick = () => {
    alert("Guest mode coming soon!");
    // or navigate("/guest");
  };

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="left">
          <h1 className="logo">Meetify</h1>
        </div>
        <div className="right">
          <p className="nav-link" onClick={handleGuestClick}>
            Join as Guest
          </p>
          <p className="nav-link" onClick={handleRegisterClick}>
            Register
          </p>
          <button className="login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div className="main-left">
          <h2 className="main-heading">
            <span className="highlight">
              Connect. Collaborate. Communicate.
            </span>
          </h2>
          <p>
            Experience seamless video meetings with <b>Meetify</b> — your
            all-in-one platform for real-time communication and collaboration.
          </p>

          <button className="getStarted-btn" onClick={handleLoginClick}>
            Get Started
          </button>
        </div>

        <div className="main-right">
          <img
            src={image}
            alt="Video Call Illustration"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
}
