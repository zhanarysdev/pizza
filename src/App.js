import React, { Component } from 'react';
import logo from './logo.svg';
import MealMenu from './components/layouts/Header/MealMenu'
import Header from './components/layouts/Header/Header'
import Pizza from './components/pizza/Pizza'
import Footer from './components/layouts/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MealMenu/>
        <Pizza/>
        <Footer/>
      </div>
    );
  }
}

export default App;
