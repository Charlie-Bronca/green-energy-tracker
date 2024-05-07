import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const PostcodeDisplay = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const postcode = urlParams.get("postcode");

    if (postcode) {
      try {
        fetchChartData(postcode);
      } catch (e) {
        if (e) {
          setErrors(true);
        }
      }
    } else {
      document.getElementById("myChart").textContent = "No postcode provided.";
    }
  }, []);

  const fetchChartData = (postcode) => {
    const ukRegions = {
      AB: "North Scotland",
      AL: "East England",
      B: "West Midlands",
      BA: "South West England",
      BB: "North West England",
      BD: "Yorkshire",
      BH: "South England",
      BL: "North West England",
      BN: "South East England",
      BR: "London",
      BS: "South West England",
      BT: "Northern Ireland",
      CA: "North West England",
      CB: "East England",
      CF: "South Wales",
      CH: "North West England",
      CM: "East England",
      CO: "East England",
      CR: "London",
      CT: "South East England",
      CV: "West Midlands",
      CW: "North West England",
      DA: "London",
      DD: "North Scotland",
      DE: "East Midlands",
      DG: "South Scotland",
      DH: "North East England",
      DL: "Yorkshire",
      DN: "Yorkshire",
      DT: "South West England",
      DY: "West Midlands",
      E: "London",
      EC: "London",
      EH: "South Scotland",
      EN: "London",
      EX: "South West England",
      FK: "South Scotland",
      FY: "North West England",
      G: "South Scotland",
      GL: "South West England",
      GU: "South East England",
      HA: "London",
      HD: "Yorkshire",
      HG: "Yorkshire",
      HP: "East England",
      HR: "West Midlands",
      HS: "North Scotland",
      HU: "Yorkshire",
      HX: "Yorkshire",
      IG: "London",
      IP: "East England",
      IV: "South Scotland",
      KA: "South Scotland",
      KT: "London",
      KW: "North Scotland",
      KY: "South Scotland",
      L: "North West England",
      LA: "Yorkshire",
      LD: "North Wales",
      LE: "East Midlands",
      LL: "North Wales",
      LN: "East Midlands",
      LS: "Yorkshire",
      LU: "East England",
      M: "North West England",
      ME: "South East England",
      MK: "East England",
      ML: "South Scotland",
      N: "London",
      NE: "North East England",
      NG: "East Midlands",
      NN: "West Midlands",
      NP: "South Wales",
      NR: "East England",
      NW: "London",
      OL: "North West England",
      OX: "South England",
      PA: "South Scotland",
      PE: "East England",
      PH: "North Scotland",
      PL: "South West England",
      PO: "South England",
      PR: "North West England",
      RG: "South England",
      RH: "South East England",
      RM: "London",
      S: "Yorkshire",
      SA: "South Wales",
      SE: "London",
      SG: "East England",
      SK: "North West England",
      SL: "South England",
      SM: "London",
      SN: "South England",
      SO: "South England",
      SP: "South England",
      SR: "North East England",
      SS: "East England",
      ST: "West Midlands",
      SW: "London",
      SY: "North Wales",
      TA: "South West England",
      TD: "South Scotland",
      TF: "West Midlands",
      TN: "South East England",
      TQ: "South West England",
      TR: "South West England",
      TS: "North East England",
      TW: "London",
      UB: "London",
      W: "London",
      WA: "North West England",
      WC: "London",
      WD: "East England",
      WF: "Yorkshire",
      WN: "North West England",
      WR: "West Midlands",
      WS: "West Midlands",
      WV: "West Midlands",
      YO: "Yorkshire",
      ZE: "North Scotland",
    };

    const regionIds = {
      'North Scotland': 1,
      'South Scotland': 2,
      'North West England': 3,
      'North East England': 4,
      'Yorkshire': 5,
      'North Wales': 6,
      'South Wales': 7,
      'West Midlands': 8,
      'East Midlands': 9,
      'East England': 10,
      'South West England': 11,
      'South England': 12,
      'London': 13,
      'South East England': 14,
      'England': 15,
      'Scotland': 16,
      'Wales': 17
  };

    const mySlice = (postcode) => {
      let myPostcode = "";
      const alphabet = new Set("abcdefghijklmnopqrstuvwxyz".split(""));

      for (let char of postcode) {
        if (alphabet.has(char.toLowerCase())) {
          myPostcode += char.toUpperCase();
          if (myPostcode.length === 2) {
            return myPostcode;
          }
        }
      }
      return myPostcode;
    };

    const resultElement = document.getElementById("myChart");

    const slicedRegionId = mySlice(postcode);
    const region = ukRegions[slicedRegionId];
    if (!region) {
      throw new Error("404 Not Found.");
    }
    if (region) {
      fetch(`https://api.carbonintensity.org.uk/regional`)
        .then((response) => response.json())
        .then((data) => {
          if (data.data && data.data.length > 0 && data.data[0].regions) {
            const regionData = data.data[0].regions.find((regionData) => {
              return regionData.regionid === regionIds[region];
            });
            if (!regionData) {
              throw new Error("404: Bad Postcode");
            }

            if (regionData) {
              const generationMix = regionData.generationmix;
              const data = generationMix.map((fuel) => fuel.perc);
              const labels = generationMix.map((fuel) => fuel.fuel);
              const backgroundColors = getFuelColors(generationMix.length);

              const myChart = new Chart(resultElement, {
                type: "bar",
                data: {
                  labels: labels,
                  datasets: [
                    {
                      data: data,
                      backgroundColor: backgroundColors,
                    },
                  ],
                },
                options: {
                  title: {
                    display: true,
                    text: "Generation Mix by Fuel Type",
                  },
                  legend: {
                    display: false,
                  },
                },
              });
            }
          }
        });
    }
  };

  const getFuelColors = (numColors) => {
    const defaultColors = [
      "rgba(100, 255, 100, 0.5)",
      "rgba(100, 100, 255, 0.5)",
      "rgba(255, 255, 100, 0.5)",
      "rgba(255, 100, 100, 0.5)",
      "rgba(255, 100, 255, 0.5)",
      "rgba(100, 100, 100, 0.5)",
      "rgba(100, 200, 255, 0.5)",
      "rgba(255, 200, 100, 0.5)",
      "rgba(255, 150, 50, 0.5)",
    ];

    if (numColors <= defaultColors.length) {
      return defaultColors.slice(0, numColors);
    } else {
      const additionalColors = [];
      for (let i = 0; i < numColors - defaultColors.length; i++) {
        additionalColors.push(
          `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)}, 0.5)`
        );
      }
      return defaultColors.concat(additionalColors);
    }
  };

  if (errors) {
    return <NotFound />;
  }
  return (
    <div>
      <Navbar />
      <div>
      <canvas
        id="myChart"
        width="400"
        height="200"
        class="postcode-main"
      ></canvas>
      </div>
      <Footer />
    </div>
  );
};

export default PostcodeDisplay;
