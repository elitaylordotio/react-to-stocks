import React, { Component } from 'react';
import graphBase from "./Graph-Base"
import './Graph.css';

export default class graphComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    const graphGeneration = new graphBase(props.data, props.width, props.height);
    this.state = {
      graph: graphGeneration,
      path: graphGeneration.makePath(),
      axis: props.data,
      svgWidth: props.width,
      svgHeight: props.height
    }
  }

  render() {
    return (
      <svg className="loaded" width={this.state.svgWidth} height={this.state.graph.getHeight()}>
        <path className="dataset" id="dataset-1" d={this.state.path}></path>
        {/* {this.state.axis} */}
      </svg>
    );
  }
}

