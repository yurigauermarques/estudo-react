import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 
      1000
    );
  }
  
  componentWillMount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h1>Alo, mundo!</h1>
        <FormattedDate date={this.state.date} /> 
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState( state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


function Applicacao() {
  return(
    <div>
      <Clock />
      <br/>
      <br/>
      <Toggle />  
    </div>
  );
}
function tick() {
  ReactDOM.render(
    <Applicacao />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
