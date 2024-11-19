import React from "react";

// Initial state for the restaurants context
export const RestaurantsInitialState = {
  restaurants: [],
  starredRestaurants: [],
};

// Reducer function to handle different actions related to restaurants
export const RestaurantsReducer = (state = RestaurantsInitialState, action) => {
  switch (action.type) {
    // Action to load all restaurants
    case "LOADED_RESTAURANTS": {
      return { ...state, restaurants: action.payload };
    }
    // Action to load starred restaurants
    case "LOADED_STARRED_RESTAURANTS": {
      return { ...state, starredRestaurants: action.payload };
    }
    // Action to add a new restaurant
    case "ADD_NEW_RESTAURANT": {
      return { ...state, restaurants: [...state.restaurants, action.payload] };
    }
    // Action to delete a restaurant
    case "DELETE_RESTAURANT": {
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.id !== action.payload
        ),
        starredRestaurants: state.starredRestaurants.filter( starred => starred.restaurantId !== action.payload)
      };
    }
    // Action to update the name of a restaurant
    case "UPDATE_RESTAURANT_NAME": {
      const nextRestaurantsState = [...state.restaurants];
      const restaurantToUpdate = nextRestaurantsState.find(
        (restaurant) => restaurant.id === action.payload.id
      );
      const nextStarredState = [...state.starredRestaurants]
      const starredToUpdate = nextStarredState.find(starred => starred.restaurantId === action.payload.id)

      if(starredToUpdate) {
        starredToUpdate.name = action.payload.newName
      }

      restaurantToUpdate.name = action.payload.newName;
      return {
        ...state,
        restaurants: nextRestaurantsState,
        starredRestaurants: nextStarredState
      };
    }
    // Action to star a restaurant
    case "STAR_RESTAURANT": {
      return {
        ...state,
        starredRestaurants: [...state.starredRestaurants, action.payload],
      };
    }
    // Action to unstar a restaurant
    case "UNSTAR_RESTAURANT": {
      return {
        ...state,
        starredRestaurants: state.starredRestaurants.filter(
          (restaurant) => restaurant.id !== action.payload
        ),
      };
    }
    // Action to update the comment of a starred restaurant
    case "UPDATE_STARRED_RESTAURANT_COMMENT": {
      const nextStarredRestaurantsState = [...state.starredRestaurants];
      const restaurantToUpdate = nextStarredRestaurantsState.find(
        (restaurant) => restaurant.id === action.payload.id
      );

      restaurantToUpdate.comment = action.payload.newComment;

      return { ...state, starredRestaurants: nextStarredRestaurantsState };
    }
    // Default case to return the current state
    default:
      return state;
  }
};

// Create a context for restaurants with initial state and dispatch function
const RestaurantsContext = React.createContext({
  state: RestaurantsInitialState,
  dispatch: (action) => {},
});

export default RestaurantsContext;
