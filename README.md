# Admin Mock

Admin Mock is an example CRUD application with a mocked login and two different data tables, which could potentially be scaled to more datatypes. It's made with ⚛ React with hooks using a reducer function shared with Context API. It uses a fake backend served by [json-server](https://github.com/typicode/json-server).

This was mainly done to show my capabilities with React.

## Getting started
```
npm install
```
Installs the required packages. Then:
```
npm start
```
Launches `json-server` and `react-scripts start` concurrently using... well, [concurrently](https://github.com/kimmobrunfeldt/concurrently).\
This will launch the frontend at `localhost:3000` and the backend at `localhost:3004`.

## About the decision behind implementation details
### Context API / useReducer
Having to lift and share complex state that needed to be read in a table, in a modal form and in various handler functions was making the `DataPanel` parent component too cluttered, so I decided to share some state variables and a reducer function to make changes to that state easier throughout the app using React's [Context API](https://es.reactjs.org/docs/context.html).

### Styling
I recently learnt about [CSS Modules](https://github.com/css-modules/css-modules) and I discovered I could use them with SASS. I don't usually do utility classes, but I think it made sense to use SASS for some easy global styling that could be shared throughout the app, specially keeping in mind most of the app was essentially form components. So I made a bunch of reusable UI utilities along with some flexbox and margin ones using SASS, and if I needed to style a particular component I used a scoped SCSS Module.

## Application structure
```
db/mock.json - Contains the mocked database by json-server

public/ - React's public folder

src/
  index.js - Application's entry point

  api/functions.js - Handles all connections with the backend

  components/
    authentication/ - Auth panel components
    datapanel/ - Main application components DataPanel is the parent one

  store/
    AppContext.js - Wraps all the app in a Context Provider with a shared state
    appReducer.js - Reducer function that governs important state changes

  utils/ - Functions abstracted to be shared by multiple components

  index.scss - SASS global styling entry point
  partials/ - SASS partials imported by index.scss
```