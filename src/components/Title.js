import React, { useState, useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = title;
  });
};

const Title = () => {
  const [title, setTitle] = useState("React Classes");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  useTitle(title);

  return (
    <>
      <h1 className="title">Project</h1>
      <input value={title} onChange={handleTitleChange} />
    </>
  );
};

export default Title;
