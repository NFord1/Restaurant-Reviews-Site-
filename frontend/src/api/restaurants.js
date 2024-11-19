import { API_ENDPOINT } from ".";

// Fetches the list of restaurants from the API
export const getRestaurants = async () => {
  const response = await fetch(`${API_ENDPOINT}/restaurants`);
  const restaurants = await response.json();
  return restaurants;
};

// Adds a new restaurant with the given name to the API
export const addNewRestaurant = async (newName) => {
  const response = await fetch(`${API_ENDPOINT}/restaurants`, {
    method: "POST",
    body: JSON.stringify({
      name: newName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const newRestaurant = await response.json();
  return newRestaurant;
};

// Deletes a restaurant with the given id from the API
export const deleteRestaurant = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/restaurants/${id}`, {
    method: "DELETE",
  });
  return response.status;
};

// Updates the name of a restaurant with the given id in the API
export const updateRestaurantName = async (id, newName) => {
  const response = await fetch(`${API_ENDPOINT}/restaurants/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      newName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.status;
};

// Stars a restaurant with the given id in the API
export const starRestaurant = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/restaurants/starred`, {
    method: "POST",
    body: JSON.stringify({
      id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const newStarredRestaurant = await response.json();
  return { status: response.status, data: newStarredRestaurant };
};
