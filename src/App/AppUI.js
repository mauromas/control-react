import React from "react";
import { ActivityCounter } from "../ActivityCounter";
import { ActivityList } from "../ActivityList";
import { ActivityItem } from "../ActivityItem";
import { ActivitySearch } from "../ActivitySearch";
import { AddActivityButton } from "../AddActivityButton";
import "./spinner.css";
import { ActivityContext } from "../ActivityContext";
import { Modal } from "../Modal/";
import { Form } from "../Form";

function AppUI() {
  const {
    error,
    loading,
    searchedActivity,
    activityComplete,
    activityDelete,
    openModal,
    setOpenModal,
  } = React.useContext(ActivityContext);
  return (
    <React.Fragment>
      <ActivityCounter />

      <ActivitySearch />

      <ActivityList>
        {loading && <p className="spinner"></p>}
        {error && <p>Reacrgá la pagina, hubo un error...</p>}
        {!loading && !searchedActivity.length && (
          <p>No se encontraron actividades, porque no creas una Actividad..</p>
        )}
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

      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}

      <AddActivityButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
