import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Salman Shah','Bqappi', 'Shuvo']
  const products = [
    {name: 'Photoshop', price: '$90.99' },
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF reader', price: '$05.88'}, ]

  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li> )
          }
          {
            products.map(product => <li>{product.name}</li> )
          }
        </ul>

        <Users></Users>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name="Abrar" job="Website Developer"></Person>
        <Person name="Masum" job="Assistent"></Person>
        
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount]  = useState(15);
  const handleIncrease = () => setCount(count + 1);
  return(
<div>
  <h1>Count: {count}</h1>
  <button onClick={() => setCount(count + 1)}>Increase</button>
  <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
</div>
  )
}

function Users(params) {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'Blue',
    height:'200px',
    width: '200px',
    float: 'left',
    margin: '10px',

  }
  const {name, price}= props.product;
  return(
    <div style={productStyle}>
      <h4>{name} </h4>
      <h6>{price}</h6>
      <button>Buy Now</button>

    </div>
  )
}

function Person(props){
  return(
    <div style={{color: "black", background: "white", margin:"20px",padding: "20px", borderRadius: "15px",}}>
      <h3>I am {props.name}</h3>
      <p>I am a {props.job} </p>
    </div>
  )

}

export default App;
