import { useReducer } from "react"; // Import useReducer hook from React
import "./App.css"; // Import CSS file for styling
import Restaurants from "./components/restaurants"; // Import Restaurants component
import StarredRestaurants from "./components/starredRestaurants"; // Import StarredRestaurants component
import RestaurantsContext, {
  RestaurantsInitialState,
  RestaurantsReducer,
} from "./provider/restaurants"; // Import context, initial state, and reducer

function App() {
  // Initialize state and dispatch using useReducer hook
  const [state, dispatch] = useReducer(
    RestaurantsReducer,
    RestaurantsInitialState
  );

  return (
    <div className="App">
      <h1>My Restaurant List</h1>
      {/* Provide state and dispatch to the context */}
      <RestaurantsContext.Provider value={{ state, dispatch }}>
        <Restaurants /> {/* Render Restaurants component */}
        <StarredRestaurants /> {/* Render StarredRestaurants component */}
      </RestaurantsContext.Provider>
    </div>
  );
}

export default App; // Export App component as default
