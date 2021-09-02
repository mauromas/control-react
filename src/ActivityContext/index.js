import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ActivityContext = React.createContext();

function ActivityProvider(props) {
  const {
    item: activities,
    saveItem: saveActivity,
    loading,
    error,
  } = useLocalStorage("ACTIVITY_V1", []);
  const [search, setSearch] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

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

  const addActivity = (text) => {
    const newActivities = [...activities];
    newActivities.push({
      completed: false,
      text,
    });

    saveActivity(newActivities);
  };

  return (
    <ActivityContext.Provider
      value={{
        loading,
        error,
        completeActivity,
        totalActivities,
        search,
        setSearch,
        searchedActivity,
        activityComplete,
        activityDelete,
        addActivity,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </ActivityContext.Provider>
  );
}

export { ActivityContext, ActivityProvider };
