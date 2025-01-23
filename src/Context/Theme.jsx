import React, { useContext } from 'react';
import { NewContext } from './Home';

const Theme = () => {
  // Destructure the context value properly
  const { theme, toggle } = useContext(NewContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#040404', 
        color: theme === 'light' ? '#000' : '#fff', 
        padding: '20px',
         
        textAlign: 'center'
      }}
    >
      <h1>Current Theme: {theme}</h1>
      
      <button onClick={toggle} style={{ padding: '10px 20px'}}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Theme;
