# RESTful Restaurant External API

This project consists of a backend and a frontend for managing and displaying starred restaurants. The site will allow its users to view a list of saved restaurants, add to that list, star their favourite restaurants, and leave comments about these places.

## Backend

The backend is built with Node.js and Express, and it uses Supabase for database management.

### Available Scripts

In the `backend` directory, you can run:

#### `npm start`

Starts the backend server using `nodemon`.

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```
SUPABASEURL=your_supabase_url
SUPABASE_SECRET=your_supabase_secret
PORT=3000
```

## Frontend

The frontend is built with React and Create React App.

### Available Scripts

In the `frontend` directory, you can run:

#### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Structure

### Backend

- `backend/app.js`: Main application file.
- `backend/bin/www`: Script to start the server.
- `backend/routes/`: Directory containing route handlers.
- `backend/provider/supabase.js`: Supabase client setup.

### Frontend

- `frontend/src/`: Source files for the React application.
- `frontend/public/`: Public assets for the React application.

## License

This project is licensed under the MIT License.
```