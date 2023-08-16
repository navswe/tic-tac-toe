// Index.js is the bridge file between the components in App.js and the web browser

//import React
import React from 'react'; 

//Import React "Document Object Model" (DOM) which repersents the entire UI of this application. It is represented as a tree data structure. React uses Virtual DOM which is like a lightweight and faster copy of actual DOM.
import ReactDOM from 'react-dom/client'; 

// imports the components styles from .css file
import './index.css';

// import the components from App.js
import App from './App';


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
