import React from "react";
import "./ActivitySearch.css";

function ActivitySearch({ search, setSearch }) {
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
