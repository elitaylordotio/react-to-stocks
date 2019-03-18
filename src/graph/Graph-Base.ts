

// https://bashooka.com/coding/animated-chart-graph-examples/
// Using chart examples from here.

interface graphPoint {
  x: number;
  y: number;
}

export default class graphBase {
  private graphPoints: graphPoint[];
  private width: number;
  private height: number;

  constructor(graphData: graphPoint[], svgWidth: number, svgHeight: number) {
    this.graphPoints = graphData;
    this.height = this.getHeight();
    this.width = svgWidth;
  }
  
  public getHeight(): number {
    const height = this.getMaxY() - this.getMinY();
    return height;
  }
  private getMinX(): number {
    const data = this.graphPoints;
    const only_x = data.map(obj => obj.x);
    const min_x = Math.min.apply(null, only_x);
    return min_x;
  }
  private getMinY(): number {
    const data = this.graphPoints;
    const only_y = data.map(obj => obj.y);
    const min_y = Math.min.apply(null, only_y);
    return min_y;
  }
  private getMaxX(): number {
    const data = this.graphPoints;
    const only_x = data.map(obj => obj.x);
    const max_x = Math.max.apply(null, only_x);
    return max_x;
  }
  private getMaxY(): number {
    const data = this.graphPoints;
    const only_y = data.map(obj => obj.y);
    const max_y = Math.max.apply(null, only_y);
    return max_y;
  }
  private getSvgX(x: number): number {
    const svgWidth = this.width;
    return Math.floor((x / this.getMaxX() * svgWidth));
  }
  private getSvgY(y: number): number {
    const svgHeight = this.height;
    return Math.floor(svgHeight - (y / this.getMaxY() * svgHeight));
  }
  public makePath() {
    const data = this.graphPoints;
    let path = `M  ${0} ${this.height} `

    path += data.map((point, i) => {
      if(Math.floor(i/2) === (i/2)){
        return `S ${this.getSvgX(point.x)} ${this.getSvgY(point.y)}  `
      } else {
        return `${this.getSvgX(point.x)} ${this.getSvgY(point.y)}  `
      }
      
    });

    path = path.replace(/,/g, '')
    path += `L ${this.width} ${this.height}`;
    return path;
  }
  
}

