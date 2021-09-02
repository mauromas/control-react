import React from "react";
import { ActivityContext } from "../ActivityContext";
import "./Form.css";

function Form() {
  const [newActivityValue, setNewActivityValue] = React.useState("");
  const { addActivity, setOpenModal } = React.useContext(ActivityContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewActivityValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newActivityValue.length >= 1) {
      addActivity(newActivityValue);
      setOpenModal(false);
    } else {
      alert("La actividad no puede estar vacía");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Creá tu Actividad:</h3>
      <label>Ingresa Aquí:</label>
      <textarea
        onChange={onChange}
        placeholder="Ej: Aprobar todas las materias donde estudio..."
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
          type="button"
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir Actividad
        </button>
      </div>
    </form>
  );
}

export { Form };
