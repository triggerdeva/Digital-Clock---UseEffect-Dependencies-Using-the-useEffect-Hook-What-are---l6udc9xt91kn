import React,{Component} from 'react'
import '../styles/App.css';
class DigitalClock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div>{time.toLocaleString()}</div>
    );
  }
}
const App = () => {

  return (
    <div id="main">
      <div className="date-time">
      <DigitalClock />
      </div>
    </div>
  )
}


export default App;
