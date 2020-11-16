import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// const author = {
//   avatarUrl: 'https://pm1.narvii.com/7410/7031751e3389d1a1a3a6be145d946a8d12aabdcbr1-519-922v2_00.jpg',
//   name: 'Yuri',
//   text: 'abobora voadora',
//   date: '2020-10-01'

// }

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.usr.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {/* {formatDate(props.date)} */}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Comment author />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
