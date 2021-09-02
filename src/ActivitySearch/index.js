import React from "react";
import { ActivityContext } from "../ActivityContext";
import "./ActivitySearch.css";

function ActivitySearch() {
  const { search, setSearch } = React.useContext(ActivityContext);
  const onSearchValuesChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="activitySearch"
      placeholder="Que actividad deseas buscar..."
      value={search}
      onChange={onSearchValuesChange}
    />
  );
}

export { ActivitySearch };
