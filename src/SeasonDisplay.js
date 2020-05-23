import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const seasonDisplayText =
    season === "Winter" ? "Burr, it is chilly." : "Lets hit the beach";
  const icon = season === "Winter" ? "snowflake" : "sun";
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{seasonDisplayText}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
