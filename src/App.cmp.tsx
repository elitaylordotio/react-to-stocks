import React, { Component } from 'react';
import './App.css';
import Graph from "./graph/Graph.cmp";
import Navigation from './navigation/Navigation.cmp';

export default class appComponent extends Component {
    // This will be replaced will actual data!
    private randomArray(){
      let data = []
      const size = 6;
      for (let i = 0; i < size; i++) {
        const y = Math.floor(Math.random() * 50) + 50;
        const x = i;
        const obj = {x,y};
        data.push(obj)
      }
      return data
    }

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Graph data={this.randomArray()} height={500} width={500}></Graph>
      </div>
    );
  }
}