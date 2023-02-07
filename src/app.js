import React from 'react';

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

 export default App;


 /** Example for doing a name export 
 like if you have already exported the default app
 and you want a variable more to be export so 
 you can do it in this way 
  */
  const message = "Oii";
  export {message} 