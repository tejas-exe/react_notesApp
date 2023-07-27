import "./App.css";
import ComposeNotes from "./Components/ComposeNotes/ComposeNotes";
import DisplayNotes from "./Components/DisplayNotes/DisplayNotes";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [note, setNote] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onNoteSubmit = (event) => {
    console.log("==>", event);
    setNote((notes) => [...notes, event]);
  };

  const onNoteDelete = (id) => {
    let filteredData = note.filter((item) => item.id !== id);
    setNote(filteredData);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter notes based on search query
  const filteredNotes = note.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("-->", note);
  return (
    <div className="App">
      <ComposeNotes onNoteSubmit={onNoteSubmit} />
      <div className="iptcontainer">
        <input
          className="searchinput"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search notes here"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass}  className="icon"/>
      </div>
      <div className="notesContainer">
        {/* Display filtered notes */}
        {filteredNotes.map((item) => (
          <DisplayNotes key={item.id} info={item} onNoteDelete={onNoteDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
