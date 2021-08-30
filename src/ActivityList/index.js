import React from "react";
import "./activityList.css";

function ActivityList(props) {
  return (
    <React.Fragment>
      <section className="activityList">
        <ul>{props.children}</ul>
      </section>
    </React.Fragment>
  );
}

export { ActivityList };
