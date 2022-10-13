import logo from './logo.svg';
import './App.css';
import Graph from './Components/Graph';
import Label from './Components/Label';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
       <div className='container mx-auto maz-w-6xl text-center '>
       <h1 className='display flex justify-center  bg-teal-800 text-white p-5 mb-10 text-2xl '>Expense Tracker</h1>
       
       <div className='grid md:grid-cols-2 gap-4'>
         <Graph/>  
          <Form/>  
       </div>
       </div>
       </div>
      
  );
}

export default App;
