import React, { Component, useEffect, useState } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

// class App extends Component {
  
//   state = {
//     sushiItems: [],
//     money: 100
//   }
const App = () => {

  const[money, setMoney] = useState(100)
  const[sushiItems, setSushiItems] = useState([])

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushiItems(data))
  })


   const updateMoney = (sushiPrice) => {
    setMoney(money - sushiPrice)
  }

  
    return (
      <div className="app">
        <SushiContainer sushiItems = {sushiItems} updateMoney = {updateMoney}  money = {money}/>
        <Table money = {money}/>
      </div>
    );
  }


export default App;