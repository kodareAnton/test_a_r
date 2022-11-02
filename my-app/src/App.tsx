import React from 'react';
import logo from './logo.svg';
import './App.css';

interface FullName {
  firstName: string;
  lastName: string;
}
function FunctionalComponent(){
  alert('hej')
}

function App() {
  return (<>
    <h1>hej</h1>
   <button onClick={FunctionalComponent}>Klicka mig</button>
   </>
  );
}

export default App;
