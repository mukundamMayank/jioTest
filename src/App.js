import logo from './logo.svg';
import './App.css';

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

function sum(a, b) {
  return a + b;
}

function App(props){
  if(props.lang === 'JS'){
    return <h1>JS is fav</h1>;
  }
  else if(props.lang === 'Python'){
    return <h1>Python is good</h1>
  }

  // return(
  //   <div className="App">
  //      <button onClick={() => alert('Button displayed')}>Click here</button>
        

  //   </div>
  //   );
}

export default App;
