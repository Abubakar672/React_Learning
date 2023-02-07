//Step 1 => Import react and react dom libraries

import React from 'react';   //Knows what the component is 
import ReactDOM from 'react-dom/client'; // React DOM librariy knows how to get a component to show up in browser

//Here we are importing two things one is the APP and the other is the message 
import App, {message} from './app';
// Step 2 => Get a refrence to the div with  ID Root

const el = document.getElementById('root');

// Step 3 => Tell React to take control of that element 

const root = ReactDOM.createRoot(el);

// Step 4 => Create a component 


root.render(<App/>);