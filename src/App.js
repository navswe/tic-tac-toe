// import component styles from App.css
import './App.css';
// Import Square.js component
import Square from './Square';


function App() {
  const propVariable = 'This is a prop'
  return (
    <Square propVar = {propVariable}/>
  );
}

//export this function to make it available outside of this file
// default keyword tells other files that this is the main funciton of this file
export default App;




