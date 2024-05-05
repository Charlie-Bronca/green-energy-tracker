import React from "react";

export default function NavBar() {
  return (
    <>
      <nav class="nav-bar-other">
        <div class="nav-container-other">
          <div class="logo-other">
            <a href="/home" class="a-logo-other">
              Green Energy Tracker
            </a>
          </div>
          <div class="container-back">
            <a href="/home">
              <button class="back-button">Back to Home</button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
