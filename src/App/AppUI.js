import React from "react";
import { ActivityCounter } from "../ActivityCounter";
import { ActivityList } from "../ActivityList";
import { ActivityItem } from "../ActivityItem";
import { ActivitySearch } from "../ActivitySearch";
import { AddActivityButton } from "../AddActivityButton";

function AppUI({
  completeActivity,
  totalActivities,
  searchedActivity,
  activityComplete,
  activityDelete,
  search,
  setSearch,
}) {
  return (
    <React.Fragment>
      <ActivityCounter completed={completeActivity} total={totalActivities} />

      <ActivitySearch search={search} setSearch={setSearch} />

      <ActivityList>
        {searchedActivity.map((activity) => (
          <ActivityItem
            key={activity.text}
            text={activity.text}
            completed={activity.completed}
            onComplete={() => activityComplete(activity.text)}
            onDelete={() => activityDelete(activity.text)}
          />
        ))}
      </ActivityList>

      <AddActivityButton />
    </React.Fragment>
  );
}

export { AppUI };
