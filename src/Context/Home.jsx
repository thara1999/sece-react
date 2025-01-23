import React, { createContext, useState } from 'react';

// Create the context
export const NewContext = createContext();

const Home = ({ children }) => {
  const [theme, updatedTheme] = useState("light"); // State to manage theme (light/dark)

  // Function to toggle the theme between 'light' and 'dark'
  const toggle = () => {
    updatedTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  };

  return (
    // Providing theme and toggle function to children components
    <NewContext.Provider value={{ theme, toggle }}>
      {children}
    </NewContext.Provider>
  );
};

export default Home;
