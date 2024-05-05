import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import National from "../components/National";
import England from "../components/England";
import Scotland from "../components/Scotland";
import Wales from "../components/Wales";
import Footer from "../components/Footer";
import ProgressTracker from "../components/ProgressTracker";

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
          <a href="https://www.nationalgrideso.com/">
            <img
              src="assets/images/NGESO_logo.png"
              alt="National Grid ESO logo"
              class="df-logo"
              id="zoom1"
            />
          </a>
          <a href="https://www.edf.org/europe">
            <img
              src="assets/images/EDF_logo.png"
              alt="Energy Defense Fund Europe logo"
              class="df-logo"
              id="zoom2"
            />
          </a>
          <a href="http://www.cs.ox.ac.uk/">
            <img
              src="assets/images/Oxford_logo.png"
              alt="University of Oxford, Department of Computer Science logo"
              class="df-logo"
              id="zoom3"
            />
          </a>
          <a href="https://www.wwf.org.uk/">
            <img
              src="assets/images/WWF_logo.png"
              alt="WWF logo"
              class="df-logo"
              id="zoom4"
            />
          </a>
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
              <h3 class="h3-energy-generation">Monthly Energy Generation Statistics</h3>
              <h6 class="h6-energy-generation">New low carbon records in April</h6>
              <p class="paragraph-energy-generation">
              In April, wind was our largest source of generation for the third consecutive month, providing 35.1% of our electricity.
              </p>
              <p class="paragraph-energy-generation">
              59% of electricity came from zero-carbon sources, peaking at 88% on 15 April at 1pm.
              </p>
              <p class="paragraph-energy-generation">
              During April, Great Britain achieved two new low carbon records. On 5 April the low carbon record was broken for the first time at 21gCO2/kWh, beating the previous record of 27gCO2/kWh. Ten days later, on 15 April at 1pm, the record was broken again at 19gCO2/kWh.
              </p>
              <p class="paragraph-energy-generation">
              On 15 April the share of Great Britain’s electricity being generated by fossil fuels also fell to a record low of 2.4%.
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
          <ProgressTracker />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
