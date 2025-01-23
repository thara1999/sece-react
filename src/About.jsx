import React, { useRef } from "react";

const About = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default About;
