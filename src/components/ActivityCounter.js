import React from "react";
import "./styles/ActivityCounter.css";

function ActivityCounter({ completed, total }) {
  return (
    <h2 className="activityCounter">
      Actividades Completas {completed} de {total}
    </h2>
  );
}

export { ActivityCounter };
