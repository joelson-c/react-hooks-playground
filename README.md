# React hooks playground

This SPA (Single Page Application) was made to test react hooks and its usage with redux.
It uses an [external API][1] to fetch a list of dog breeds to populate the form.
When the user submits the form, the application will fetch a random image from the [API][1] and put the dog name over it.

## Requirements
- Node.js version 12+
- NPM version 6+

## Installing
```
git clone https://github.com/joelson-c/react-hooks-playground.git
cd react-hooks-playground
npm install
```

## Usage
Run `npm start` to start the project in development mode. By default it will open the SPA in a new tab in your default browser.

Run `npm run build` to build the APP for production. The files will be available in the `build` directory.

## Tests
To run all tests execute `npm test`

## Environment variables
- `REACT_APP_API_URL`: sets the base API URL,
should not include the trailing slash (E.g. `https://dog.ceo/api`).

# Licence
MIT

[1]: https://github.com/ElliottLandsborough/dog-ceo-api
