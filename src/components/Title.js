import React, { useState } from "react";

export default function Title() {
  const [title, setTitle] = useState("React Classes");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <>
      <h1 className="title">Project</h1>
      <input value={title} onChange={handleTitleChange} />
    </>
  );
}
