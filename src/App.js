import React, { useState, useEffect } from "react";
import { firestore } from "./firebase";

function App() {
  const [title, setTitle] = useState(null);
  const [lang, setLang] = useState("en");

  useEffect(() => getTitle(), []);

  const getTitle = async () => {
    let res = await firestore
      .collection("translations")
      .doc("title")
      .get();
    setTitle(res.data().translated);
  };

  return (
    <div className="app">
      <header className="title">{title !== null && title[lang]}</header>
      <select
        name="langSelect"
        id="langSelect"
        onChange={e => setLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

export default App;
