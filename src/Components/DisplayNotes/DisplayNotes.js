import React from "react";
import style from "./DisplayNotes.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DisplayNotes = ({ info, onNoteDelete }) => {
  const [visible, setVisiblity] = useState(false);
  return (
    <div
      className={style.container}
      onMouseEnter={() => {
        setVisiblity(true);
      }}
      onMouseLeave={() => {
        setVisiblity(false);
      }}
    >
      <h3>{info.title}</h3>
      <p className={style.desc}>{info.description}</p>
      {visible && (
        <button
          className={style.delBtn}
          onClick={() => {
            onNoteDelete(info.id);
          }}
        >
          Delete <FontAwesomeIcon icon={faTrash} style={{ color: "#d33c3c" }} />
        </button>
      )}
    </div>
  );
};

export default DisplayNotes;
