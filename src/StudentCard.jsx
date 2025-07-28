// This component displays a student's profile card using props to input the name, major, year, image, and bio.
// It uses useState to track whether the bio should be shown or hidden when a button is clicked.

import React from 'react';

function StudentCard(props) {
  // These props are used to populate the content of the student card.
  const { name, major, year, bio, imageUrl } = props;

  // useState is a React Hook used to manage component-level state.
  // It returns an array with the current state value (showBio) and a function to update it (setShowBio).
  // Initially, showBio is false, meaning the bio is hidden.
  const [showBio, setShowBio] = React.useState(false);

  // This function toggles the value of showBio between true and false when the button is clicked.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div
      style={{
        maxWidth: '350px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/*shows the URL image*/}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '12px',
        }}
      />

      {/*Displays the student's name, major, and year*/}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>
        {major} – {year}
      </p>

      {/*Button that triggers the toggleBio function*/}
      <button
        onClick={toggleBio}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
        }}
      >
        {/*Changes button label*/}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/*Shows the bio based on the value of showBio*/}
      {showBio && (
        <p style={{ marginTop: '16px', fontSize: '14px' }}>
          {bio}
        </p>
      )}
    </div>
  );
}

export default StudentCard;
