import React from "react";
import style from "./ComposeNotes.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const ComposeNotes = ({ onNoteSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [err, seterr] = useState(false);

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Notes</h1>
      <form
        className={style.formFields}
        onSubmit={(event) => {
          event.preventDefault();
          if (title && description) {
            let data = {
              title: title,
              description: description,
              id: Math.round(Math.random() * 10000),
            };
            onNoteSubmit(data);
          } else {
            seterr(true);
            setTimeout(() => {
              seterr(false);
            }, 5000);
          }
        }}
      >
        <input
          className={style.iptTitle}
          type="text"
          placeholder="Enter your title here "
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className={style.iptDesc}
          name=""
          id=""
          cols="40"
          rows="5"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Describe your task here"
        ></textarea>
        <button type="submit" className={style.btn}>
          Save to notes{" "}
          <FontAwesomeIcon icon={faFloppyDisk} style={{ color: "#21488c" }} />
        </button>
      </form>
      {err && (
        <p className={style.err}>Please make sure all details are added</p>
      )}
    </div>
  );
};

export default ComposeNotes;
