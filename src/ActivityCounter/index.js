import React from "react";
import { ActivityContext } from "../ActivityContext";
import "./ActivityCounter.css";

function ActivityCounter() {
  const { completeActivity, totalActivities } =
    React.useContext(ActivityContext);
  return (
    <h2 className="activityCounter">
      Actividades Completas {completeActivity} de {totalActivities}
    </h2>
  );
}

export { ActivityCounter };
