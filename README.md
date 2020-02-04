# React hooks playground

This SPA was made to test react hooks and its usage with redux.
It uses an external API to fetch a list of dog breeds to populate the form.
When the user submits the form, the application will fetch a random image from the API and put the dog name over it.

## Environment variables
- `REACT_APP_API_URL` **(required)**: sets the base API URL,
should not include the trailing slash (E.g. `https://dog.ceo/api`).

## Available scripts
- `npm start`
  - Starts the project in development mode.
- `npm test`
  - Runs the test watcher in an interactive mode.
- `npm run build`
  - Builds and optimizes the project for production.

Project bootstrap with [Create React App](https://github.com/facebook/create-react-app).
