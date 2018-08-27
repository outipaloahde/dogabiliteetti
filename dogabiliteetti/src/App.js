import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      percentage: 0,
      price: 0,
      dogability: 0
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value })
    console.log(this.state.quantity)
    console.log(this.state.percentage)
    console.log(this.state.price)
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('nappia painettu')
    this.calculcate();

  }

  calculcate() {
    let percentage = this.state.percentage / 100
    let d = (this.state.quantity *  percentage) / this.state.price
    this.setState({dogability: d});
  }
  
  render() {
    return (
      <div className="App">
        <h1>Dogabiliteetti</h1>
        <div>
          <form>
            
              <div>
              <label>Määrä millilitroina</label>
              <input type="text" placeholder="ml" name='quantity' onChange={this.handleChange}/>
              </div>
              <div>
                <label>Alkoholi prosentteina</label>
                <input type="text" placeholder="%" name='percentage' onChange={this.handleChange}/>
              </div>
              <div>
                <label>Hinta</label>
                <input type="text" placeholder='€' name='price' onChange={this.handleChange} />
              </div>
              <div>
                <button onClick={this.handleSubmit}>Laske dogabiliteetti</button>
              </div>
          </form>
        </div>
        <p>Dogabiliteetti {this.state.dogability}</p>
      </div>
    );
  }
}

export default App;
