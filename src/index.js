import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginContol from './LoginContol';
import Clock from './Clock';
import Page from './Page';
import Blog from './Blog';
import Toggle from './Toggle';
import NumberList from './NumberList';
import NameForm from './NameForm';
import Calculator from './Calculator'



function Applicacao() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const letras = ['a', 'b', 'c', 'd'];
  const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
  ];

  return (
    <div>
      <LoginContol />
      <br />
      <br />
      <NameForm />
      <br />
      <br />
      <Calculator />
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
