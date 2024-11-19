import React, { useState } from "react";

// Component to display a starred restaurant with the ability to edit comments and unstar the restaurant
const StarredRestaurant = ({ 
  restaurant,
  onUnstarRestaurant,
  onUpdateComment
 }) => {
  // State to manage if the comment is being edited
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the comment text
  const [comment, setComment] = useState(restaurant.comment);

  // Function to handle saving the comment
  const onSaveComment = async () => {
    onUpdateComment(comment);
    setIsEditing(false);
  };

  return (
    <div className='starred-restaurant' >
      <h3>{restaurant.name}</h3>
      {isEditing ? (
          // Input field to edit the comment
          <input
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        ) : (
          // Display the comment
          <p>{comment}</p>
        )}
      <button className='edit-btn'
        onClick={() => {
          setIsEditing((previousState) => !previousState)
        }}
      >
        {isEditing ? "Cancel Edit" : "Edit Comment"}
      </button>

      {isEditing ? (
        // Button to save the edited comment
        <button className='save-btn' onClick={onSaveComment}>Save Comment</button>
      ) : (
        // Button to unstar the restaurant
        <button className='unstar-btn' onClick={onUnstarRestaurant}>Unstar</button>
      )}
    </div>
  );
};

export default StarredRestaurant;
