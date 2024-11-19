import { API_ENDPOINT } from ".";

// Base API route for starred restaurants
const BASE_API_ROUTE = `${API_ENDPOINT}/restaurants/starred`;

// Fetches the list of starred restaurants
export const getStarredRestaurants = async () => {
  const response = await fetch(`${BASE_API_ROUTE}`);
  const json = await response.json();

  return json;
};

// Unstars a restaurant by its ID
export const unstarRestaurant = async (id) => {
  const response =  await fetch(`${BASE_API_ROUTE}/${id}`, {
    method: "DELETE"
  });

  return response.status;
};

// Updates the comment for a starred restaurant by its ID
export const updateComment = async (id, newComment) => {
  const response = await fetch(`${BASE_API_ROUTE}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      newComment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.status;
};