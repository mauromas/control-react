import React from "react";

import { AppUI } from "./AppUI";
// import "./App.css";

// const defaultActivities = [
//   { text: "Realizar varias páginas", completed: true },
//   { text: "Crear Portafolio", completed: false },
//   { text: "Cursar Angular", completed: false },
// ];

function App() {
  const localStorageActivity = localStorage.getItem("ACTIVITY_V1");

  let parsedActivity;

  if (!localStorageActivity) {
    localStorage.setItem("ACTIVITY_V1", JSON.stringify([]));
    parsedActivity = [];
  } else {
    parsedActivity = JSON.parse(localStorageActivity);
  }

  const [activities, setActivities] = React.useState(parsedActivity);
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

  const saveActivity = (newActivities) => {
    const stringifiedActivities = JSON.stringify(newActivities);
    localStorage.setItem("ACTIVITY_V1", stringifiedActivities);
    setActivities(newActivities);
  };

  const activityComplete = (text) => {
    const activityIndex = activities.findIndex(
      (activity) => activity.text === text
    );

    const newActivities = [...activities];
    newActivities[activityIndex].completed =
      !newActivities[activityIndex].completed;
    saveActivity(newActivities);
  };

  const activityDelete = (text) => {
    const activityIndex = activities.findIndex(
      (activity) => activity.text === text
    );

    const newActivities = [...activities];
    newActivities.splice(activityIndex, 1);
    saveActivity(newActivities);
  };

  return (
    <AppUI
      completeActivity={completeActivity}
      totalActivities={totalActivities}
      search={search}
      setSearch={setSearch}
      searchedActivity={searchedActivity}
      activityComplete={activityComplete}
      activityDelete={activityDelete}
    />
  );
}

export default App;
