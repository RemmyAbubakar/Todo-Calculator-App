import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "../components/NoteList";
import Search from "../components/Search";
import Header from "../components/Header";

function NoteApp() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "My first Note book",
      date: "05/08/2023",
    },
    {
      id: nanoid(),
      text: "My second Note book",
      date: "05/08/2023",
    },
    {
      id: nanoid(),
      text: "My third Note book",
      date: "05/08/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode ? "dark:bg-black" : ""}`}>
      <div className="max-w-[960px] mr-auto ml-auto pr-[15px] pl-[15px] min-h-screen">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
        <Search handleSearchText={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default NoteApp;
