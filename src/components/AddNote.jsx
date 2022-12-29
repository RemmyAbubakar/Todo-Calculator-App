import React, { useState } from "react";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new bg-[#67d7cc] rounded-[10px] p-[1rem] min-h-[170px] flex flex-col justify-between">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note...."
        className="border-none resize-none bg-[#67d7cc] outline-none placeholder-black"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer flex items-center justify-between">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button
          onClick={handleSaveClick}
          className="save bg-[#e1e1e1] border-none rounded-[15px] p-[5px_10px_5px_10px] hover:bg-[#ededed] hover:cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
