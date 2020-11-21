import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
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
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello !</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

function UserGreeting(props) {
  // const messagens =[];
  const messagens = ['React', 'Re: React', 'Re: Re: React'];
  return (
    <div>
      <h1>Welcome back!</h1>
      <Mailbox unreadMessages={messagens} />
    </div>
  );
}

function GuestGreeting(props) {
  return <h1>Please sig up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}


function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginContol extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    // { isLoggedIn ? button = <LogoutButton onClick={this.handleLogoutClick} /> : button = <LoginButton onClick={this.handleLoginClick} /> };
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }

}


function ListItem(props) {
  return <li>{props.item}</li>;
}

function NumberList(props) {
  const item = props.itens;
  const listItems = item.map((item) =>
    <ListItem key={item.toString()} item={item} />
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
}


function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );


  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}






function Applicacao() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const letras = ['a', 'b', 'c', 'd'];
  const posts = [
    { id: 1, title: 'Hello World 2', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
  ];

  return (
    <div>
      <LoginContol />
      <br />
      <br />
      <Clock />
      <br />
      <br />
      <Toggle />
      <br />
      <br />
      <Page />
      <br />
      <br />
      <NumberList itens={numbers} />
      <NumberList itens={letras} />
      <br />
      <br />
      <Blog posts={posts} />
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
