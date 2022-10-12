import logo from './logo.svg';
import './App.css';
import Graph from './Components/Graph';
import Label from './Components/Label';

function App() {
  return (
    <div className="App">
       <h1 className='display flex justify-center  bg-teal-800 text-white p-5 mb-10 text-2xl'>Expense Tracker</h1>
       <Graph/>   
       
    </div>
  );
}

export default App;
