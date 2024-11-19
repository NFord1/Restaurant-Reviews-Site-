import React, { useState, useEffect } from "react";

// Restaurant component definition
const Restaurant = ({
  restaurant, // restaurant object passed as prop
  onDeleteRestaurant, // function to handle restaurant deletion
  onStarRestaurant, // function to handle starring a restaurant
  onUpdateRestaurant, // function to handle updating restaurant name
}) => {
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage restaurant name
  const [name, setName] = useState(restaurant.name);

  // Effect to reset name state when editing mode is toggled off
  useEffect(() => {
    if (!isEditing) {
      setName(restaurant.name);
    }
  }, [isEditing, restaurant, restaurant.name]);

  // Function to handle saving the updated name
  const onSaveNameChange = async () => {
    onUpdateRestaurant(name);
    setIsEditing(false);
  };

  return (
    <div className='restaurant-list'>
      {isEditing ? (
        // Input field for editing name
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      ) : (
        // Display restaurant name
        name
      )}
      <div className='restaurant-buttons'>
        <button
          className='edit-btn'
          onClick={() => {
            setIsEditing((previousState) => !previousState);
          }}
        >
          {isEditing ? "Cancel Edit" : "Edit"}
        </button>

        {isEditing ? (
          // Button to save the updated name
          <button className='save-btn' onClick={onSaveNameChange}>Save Name</button>
        ) : (
          <>
            // Button to delete the restaurant
            <button className='delete-btn' onClick={onDeleteRestaurant}>Delete</button>
            // Button to star the restaurant
            <button className='star-btn' onClick={onStarRestaurant}>Star</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
