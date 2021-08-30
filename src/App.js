import React from "react";
import { ActivityCounter } from "./components/ActivityCounter";
import { ActivityList } from "./components/ActivityList";
import { ActivityItem } from "./components/ActivityItem";
import { ActivitySearch } from "./components/ActivitySearch";
import { AddActivityButton } from "./components/AddActivityButton";
// import "./App.css";

const defaultActivities = [
  { text: "Realizar varias páginas", completed: true },
  { text: "Crear Portafolio", completed: false },
  { text: "Cursar Angular", completed: false },
];

function App() {
  const [activities, setActivities] = React.useState(defaultActivities);
  const [search, setSearch] = React.useState("");

  const completeActivity = activities.filter(
    (activity) => activity.completed === true
  ).length;

  const totalActivities = activities.length;

  let searchedActivity = [];

  if (!search.length >= 1) {
    searchedActivity = activities;
  } else {
    searchedActivity = activities.filter((activity) => {
      const activityText = activity.text.toLocaleLowerCase();
      const searchText = search.toLocaleLowerCase();
      return activityText.includes(searchText);
    });
  }

  const activityComplete = (text) => {
    const activityIndex = activities.findIndex(
      (activity) => activity.text === text
    );

    const newActivities = [...activities];
    newActivities[activityIndex].completed =
      !newActivities[activityIndex].completed;
    setActivities(newActivities);
  };

  const activityDelete = (text) => {
    const activityIndex = activities.findIndex(
      (activity) => activity.text === text
    );

    const newActivities = [...activities];
    newActivities.splice(activityIndex, 1);
    setActivities(newActivities);
  };

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

export default App;
