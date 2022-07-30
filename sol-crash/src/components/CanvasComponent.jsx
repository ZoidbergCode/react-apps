import React from 'react';

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 250,
      z: 0,
      time: this.props.crash,
      start: true,
      crashed: this.props.crashed,
      clear: true,
    };
    this.updateCanvas = this.updateCanvas.bind(this);
    this.startCanvas = this.startCanvas.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    this.startCanvas();
  }
  componentDidMount() {}
  componentDidUpdate() {
    if (this.props.crash !== this.state.time && this.state.start) {
      this.startCanvas();
    }
    if (this.props.crashStatus && this.state.clear) {
      const ctx = this.refs.canvas.getContext('2d');
      console.log('clearing...');
      ctx.clearRect(5, 5, 10000, 10000);
      this.setState({ ...this.state, clear: false, start: true });
      console.log('canvas cleared');
    }
  }
  startCanvas() {
    this.setState({
      x: this.state.x + 0.05,
      y: this.state.y - (0.005 + this.state.z),
      z: this.state.z + 0.00001,
      time: this.state.time - 10,
      start: false,
    });
    if (!this.props.crashStatus) {
      this.updateCanvas();
      setTimeout(this.startCanvas, 10);
    } else {
      this.setState({
        ...this.state,
        x: 0,
        y: 250,
        z: 0,
        time: this.props.crash,
        start: true,
        clear: true,
      });
    }
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    let x = this.state.x;
    let y = this.state.y;
    ctx.fillStyle = '#EF0195';
    if (this.state.y < 5) {
      ctx.fillStyle = '#1f2345';
    }
    ctx.fillRect(x, y, 3, 3);
  }
  render() {
    return (
      <>
        <canvas ref="canvas" width={400} height={250} />
      </>
    );
  }
}

export default CanvasComponent;
