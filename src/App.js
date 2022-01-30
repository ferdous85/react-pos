import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Bill from './Components/Bill/Bill';
import './App.scss';
import { useState } from 'react';

function App() {
  const [billItems, setBillItems] = useState([]);
  

  const emptyBill = () => {    
    setBillItems([]);
  }

  const addItems = (product) => {        
    setBillItems(      
      [...billItems, product]
    );        
  }  

  const removeProduct = (item) => {            
    let newArray = billItems;    
    newArray.splice(newArray.findIndex(a => a.name === item.name), 1);    
    setBillItems([...newArray]);    
  }

  return (
    <div className="app">
      <Navbar />
      <div className="pos">
        <Bill products={billItems} empty={emptyBill} remove={removeProduct}/>
        <Menu addItems={addItems} />        
      </div>      
    </div>
  );
}

export default App;
