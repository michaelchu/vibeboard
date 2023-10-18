import React from "react";

function FormAlert(props) {
  return (
    <div
      className={
        "text-center p-4 rounded" +
        (props.type === "error" ? " text-red-600 bg-red-50" : "") +
        (props.type === "success" ? " text-green-600 bg-green-50" : "")
      }
    >
      {props.message}
    </div>
  );
}

export default FormAlert;
