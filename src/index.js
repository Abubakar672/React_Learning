//Step 1 => Import react and react dom libraries

import React from 'react';   //Knows what the component is 
import ReactDOM from 'react-dom/client'; // React DOM librariy knows how to get a component to show up in browser

// Step 2 => Get a refrence to the div with  ID Root

const el = document.getElementById('root');

// Step 3 => Tell React to take control of that element 

const root = ReactDOM.createRoot(el);

// Step 4 => Create a component 

 
function App(){

let message = "Hi There";
let name = "AbuBakar";
let age = "25";

//making prop value here 


const type = "number";
const minValue = 2;
const style = {border: '3px solid red'}

if(Math.random() > 0.5){
    message = "Number is greater than 0.5";
}else{
    message = "Number is lesser than 0.5";
}
/** if you are returning a prop value directly so string is alwasy passed in double qoutes "" 
& the number should be passsed in {} curly brackets 
 */

 return (<input type={type} min={minValue} style={style} /> )
}

// Step 5 => Show Component on the screen

root.render(<App/>);