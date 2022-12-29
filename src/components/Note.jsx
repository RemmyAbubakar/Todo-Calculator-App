import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note bg-[#fef68a] rounded-[10px] p-[1rem] min-h-[170px] flex flex-col justify-between whitespace-pre-wrap">
      <span className="break-words">{text}</span>
      <div className="note-footer flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon hover:cursor-pointer"
          size="1.3rem"
        />
      </div>
    </div>
  );
}

export default Note;
