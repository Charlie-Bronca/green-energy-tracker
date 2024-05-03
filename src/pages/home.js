import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import National from "../components/National";
import England from "../components/England";
import Scotland from "../components/Scotland";
import Wales from "../components/Wales";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullPostcode = postcode.toUpperCase().trim();
    navigate(`/postcode?postcode=${encodeURIComponent(fullPostcode)}`);
    // navigate(`/postcode/graph`, { state:postcode });
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  return (
    <>
      <div class="nav-bar">
        <div class="nav-container">
          <div class="logo">
            <a href="/home" class="a-logo">
              Green Energy Tracker
            </a>
          </div>
          <div class="nav-buttons">
            <a href="#uk-energy-tracker-scroll" class="energy-button">
              Energy
            </a>
            <a href="#progress-section-scroll" class="progress-button">
              Progress
            </a>
            <a href="#main-section-scroll" class="your-area-button">
              Your Area
            </a>
          </div>
        </div>
      </div>
      <div class="main-section" id="main-section-scroll">
        <div class="main-container">
          <div class="main-column1">
            <h1 class="main-h1">
              Tracking Britain's Progress Towards Net Zero
            </h1>
            <p class="main-paragraph">
              Green Energy Tracker brings energy data right to your fingertips.
              Track, compare, and follow the government's progress towards 100%
              clean energy.
            </p>
            <form className="form-block" onSubmit={handleSubmit}>
              <input
                type="text"
                id="postCode"
                placeholder="Postcode"
                className="post-code-input"
                maxLength="8"
                required
                value={postcode}
                onChange={handlePostcodeChange}
              />
              <button type="submit" className="go-button">
                Go
              </button>
            </form>
          </div>
          <div class="main-column2">
            <img
              src="assets/images/OffshoreWind.jpg"
              alt="Offshore Wind"
              class="main-img"
            />
          </div>
        </div>
      </div>
      <div class="data-from">
        <p class="data-from-text">USING DATA FROM</p>
        <div class="data-from-logos">
          <img
            src="assets/images/Departmental_Logo.png"
            alt="Department for Business, Energy & Industrial Strategy Logo"
            class="df-logo"
          />
          <img
            src="assets/images/oxford.png"
            alt="University of Oxford Logo"
            class="df-logo"
          />
          <img
            src="assets/images/National-Grid.png"
            alt="NationalGridESO Logo"
            class="df-logo"
          />
          <img
            src="assets/images/HM_Government_logo.png"
            alt="HM Government Logo"
            class="df-logo"
          />
          <img
            src="assets/images/edf.png"
            alt="Environmental Defense Fund Logo"
            class="df-logo"
          />
        </div>
      </div>
      <div class="uk-energy-tracker" id="uk-energy-tracker-scroll">
        <div class="et-container">
          <div class="uk-energy-tracker-heading">
            <div class="uk-energy-tracker-h2">
              <h2 class="h2-uk-energy-tracker">UK Energy Tracker</h2>
            </div>
            <div class="uk-energy-tracker-paragraph">
              <p class="paragraph-track">
                Track Britain's energy sources in <strong>real time!</strong>
              </p>
            </div>
          </div>
          <div class="energy-generation">
            <div class="energy-img">
              <National class="current-energy-graph" />
            </div>
            <div class="generation-text">
              <img
                src="assets/images/energy.png"
                alt="Energy Icon"
                class="energy-icon"
              />
              <h3 class="h3-energy-generation">Energy Generation</h3>
              <p class="paragraph-energy-generation">
                On average, energy that is provided by UK suppliers mostly comes
                from gas (around 41%). Renewable sources, such as wind power are
                used to produce around 30% of the energy provided while the
                percentage figures for coal and nuclear power respectively are
                around 13% and 11%.
              </p>
            </div>
          </div>
          <div class="nations-compare">
            <div class="england">
              <img
                src="assets/images/England.png"
                alt="England Flag Icon"
                class="england-flag"
              />
              <England class="england-graph" />
            </div>
            <div class="scotland">
              <img
                src="assets/images/Scotland.png"
                alt="Scotland Flag Icon"
                class="scotland-flag"
              />
              <Scotland class="scotland-graph" />
            </div>
            <div class="wales">
              <img
                src="assets/images/Wales.png"
                alt="Wales Flag Icon"
                class="wales-flag"
              />
              <Wales class=" wales-graph" />
            </div>
          </div>
        </div>
      </div>
      <div class="progress-section" id="progress-section-scroll">
        <div class="progress-container">
          <h2 class="h2-progress">100% Renewable Energy Progress</h2>
          <p class="paragraph-progress">
            The UK has a current goal of reaching 100% renewable energy by the
            year 2050.
          </p>
          <img
            src="assets/images/progress-bar.png.jpg"
            alt="Progress Bar"
            class="img-progress"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
