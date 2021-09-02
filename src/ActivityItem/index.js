import React from "react";
import "./activityItem.css";

function ActivityItem(props) {
  return (
    <React.Fragment>
      <li className="activityItem">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
          ✓
        </span>
        <p
          className={`activityItem-p ${
            props.completed && "activityItem-p--complete"
          }`}
        >
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          X
        </span>
      </li>
    </React.Fragment>
  );
}

export { ActivityItem };
