// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [amount, setAmount] = useState(0)
//   // let amount = 0;
  
//   function fun1 (){
//     output1.innerHTML = txt1.value
//   }

//   const btn1 = document.getElementbyId('btn1')
//   const txt1 = document.getElementbyId('tbuser')
//   const out1 = document.getElementbyId('output1')

//   btn1.addEventListener('click', fun1);
  
  
//   return (
//     <>

//       <div>
//         <h1 className='box-content mb-6 p-4 border-4 text-orange-400 container'>Money Tracker</h1>
//       </div>
//       <h1 className='text-xl '>Total Amount Spent: ₹{amount}</h1>
//         <h1 id='output1' className='text-md pt-4'></h1>
//       <div className="card">
//         <input type='number' min={0} max={99999} placeholder="Enter your amount"  id='tbuser' className='rounded-full p-4 w-[100%] mb-3' ></input>
//         <div className='flex'>

//         <button className='p-4 m-4' id='btn1' onClick={() => setAmount((amount) => amount + 1)} >Add Item</button>
//         <button className= 'p-4 m-4' >
//           Total Items:  {amount}
//         </button>
//         </div>
        
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  let total = 0;

  

  useEffect(() => {
    const btn1 = document.getElementById('btn1');
    const txt1 = document.getElementById('tbuser');
    const output1 = document.getElementById('output1');
    function fun1() {
      total = total + Number(txt1.value);
      console.log(total)
      sum.innerHTML = total;
      output1.innerHTML = total;
      
      
    }

    
    btn1.addEventListener('click', fun1);
    return () => {
      btn1.removeEventListener('click', fun1);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render
  
  return (
    <>
    <div>
      <div>
        <h1 className='box-content mb-6 p-4 border-4 text-orange-400 flex justify-center'>Money Tracker</h1>
      </div>
      <h1 className='text-xl'>Total Amount Spent: <span id='sum'></span></h1>
      <h1 id='output1' className='text-md pt-4'></h1>
      <div className='card'>
        <input
          type='number'
          min={0}
          max={99999}
          placeholder='Enter your amount'
          id='tbuser'
          className='rounded-full p-4 w-[100%] mb-3'
          />
        <div className='flex justify-center'>
          <button className='p-4 m-4' id='btn1' onClick={() => setAmount((amount) => amount + 1)}>

            Add Item
          </button>
          <button className='p-4 m-4'>Total Transactions: {amount}</button>
        </div>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </>
  );
}

export default App;
