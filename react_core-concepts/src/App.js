import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Ayan','Ahaan','Shiddhartha','Rayan','Adittiya']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
     {name: 'PDF Reader', price: '$6.90'},
     {name: 'Illastrator', price: '$60.90'}        
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>Arika</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Person name="Ayan" job="Hero"></Person>
        <Person name="Sakib" job="Cricketer"></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'2px solid cyan',
    borderRadius:'5px',
    color:'blue',
    backgroundColor:'lightgrey',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(25);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onMouseMove= {() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const[users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Person(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Profession: {props.job}</p>
    </div>
  )
}
export default App;