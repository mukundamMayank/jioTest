import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function sum(a, b) {
//   return a + b;
// }

// function App(){
//   // if(props.lang === 'JS'){
//   //   return <h1>JS is fav</h1>;
//   // }
//   // else if(props.lang === 'Python'){
//   //   return <h1>Python is good</h1>
//   // }

//   return(
//     <div className="App">
//        <button onClick={() => alert('Button displayed')}>Click here</button>
        

//     </div>
//     );
// }

// function App(props){
//   if(props.lang === 'JS'){
//      return <p data-testid="my_test_id">JS is fav</p>;
//    }
//    else if(props.lang === 'Python'){
//      return <h1>Python is good</h1>
//    }
// }

function App(props){
	const [name, setName] = useState("");
	if(props.lang === "JS"){
		return (
    <div>
      <span data-testid="change-input-name">
        Welcome, {name === "" ? "User" : name}!
      </span>
      <br />
      <input 
        type="text" 
        aria-label="user-name" 
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
	}
	else if(props.lang === "Python"){
		return <button onClick={() => alert('Python displayed')}>Click here</button>
	}

}

export default App;
