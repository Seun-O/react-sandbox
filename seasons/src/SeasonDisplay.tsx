import "./SeasonDisplay.css";
import React from "react";

const seasonsConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snowflake"
  }
};

const getSeason = (lat: any, month: any) => {
  if (month >= 3 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default function SeasonDisplay(props: any) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonsConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
}
