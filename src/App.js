import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const batsmans = ['Sakib', 'Tamim', 'Somoya', 'Mahmudullah', 'Soykat', 'Nasir']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premiere El', price: '$249.99' }
  ]

  const friends = [
    { name: 'Raisa', hobby: 'Pet collection' },
    { name: 'Moon', hobby: 'Gym' },
    { name: 'Galib', hobby: 'Gaming' },
    { name: 'Sakil', hobby: 'Coding' },
    { name: 'Zawaed', hobby: 'Flirting' }
  ]
  // const productNames = products.map(product => product.name)
  // console.log(productNames)

  const batsmanNames = batsmans.map(batsman => batsman)
  console.log(batsmanNames)

  return (
    <div className="App">
      <header className="App-header">

        <p>React Academy</p>

        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            batsmans.map(batsman => <li>{batsman}</li>)
          }

          {/* <li>{batsmans[0]}</li>
          <li>{batsmans[1]}</li>
          <li>{batsmans[2]}</li>
          <li>{batsmans[3]}</li> */}

          {
            products.map(product => <li>{product.name}</li>) //Only product will give an error, because there's not only text.
          }


          {
            friends.map(friend => <li>{friend.name}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }



        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}


        <Person name="Sakil" job="Web Developer"></Person>
        <Person name="Raisa" job="Student"></Person>
        <Person name={batsmans[1]} job="Cricketer"></Person>
        <Person name="Mahmudul" job="Video Editor"></Person>

      </header>
    </div>
  );
};

function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Move to Increase</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
};

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    textShadow: "5px 5px 20px black",

  };
  const { name, price } = props.product;
  // console.log(name, price)
  return (
    <div style={productStyle} >
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
};







function Person(props) {
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
    width: "400px",
    textShadow: "5px 5px 20px red"
  }

  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Job: {props.job}</h2>
      <h4>Member of the Umbralla Academy</h4>
    </div>
  )

}

export default App;
