import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginContol from './LoginContol';
import Clock from './Clock';
import Page from './Page';
import Blog from './Blog';
import Toggle from './Toggle';
import MontaList from './MontaList';
import NameForm from './NameForm';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog';
import Contacts from './Contacts';
import Chat from './Chat';
import SplitPane from './SplitPane';
import SignUpDialog from './SignUpDialog';

class Applicacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6],
      letras: ['a', 'b', 'c', 'd'],
      posts: [
        { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
        { id: 2, title: 'Installation', content: 'You can install React from npm.' }
      ],
      menu: 'welcome-dialog'
    };

    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  handleMenuChange(e) {
    this.setState({
      menu: e.target.value
    });
  }

  render() {
    const menu = this.state.menu;
    let exemplo;
    switch (menu) {
      case 'welcome-dialog':
        exemplo = <WelcomeDialog />;
        break;
      case 'login-control':
        exemplo = <LoginContol />;
        break;
      case 'name-form':
        exemplo = <NameForm />;
        break;
      case 'calculator':
        exemplo = <Calculator />;
        break;
      case 'clock':
        exemplo = <Clock />;
        break;
      case 'toggle':
        exemplo = <Toggle />;
        break;
      case 'page':
        exemplo = <Page />;
        break;
      case 'number-list':
        exemplo = <MontaList itens={this.state.numbers} />;
        break;
      case 'letra-list':
        exemplo = <MontaList itens={this.state.letras} />;
        break;
      case 'blog':
        exemplo = <Blog posts={this.state.posts} />
        break;
      case 'split-pane':
        exemplo = <SplitPane
          left={
            <Contacts />
          }
          right={
            <Chat />
          }
        />
        break;
      case 'sign-up-dialog':
        exemplo = <SignUpDialog />;
        break;
      default:
        break;
    }
    return (
      <div>
        <div className="Seletor">
          <label>
            Selecione o exemplo:
            <select name="exemplo" value={this.state.menu} onChange={this.handleMenuChange}>
              <option value="welcome-dialog">WelcomeDialog</option>
              <option value="login-control">LoginContol</option>
              <option value="name-form">NameForm</option>
              <option value="calculator">Calculator</option>
              <option value="clock">Clock</option>
              <option value="toggle">Toggle</option>
              <option value="page">Page</option>
              <option value="number-list">Lista numérica</option>
              <option value="letra-list">Lista alfabética</option>
              <option value="blog">Blog</option>
              <option value="split-pane">SplitPane</option>
              <option value="sign-up-dialog">SignUpDialog</option>
            </select>
          </label>
        </div>
        <div className="Conteudo">
          {exemplo}
        </div>
      </div >
    );
  }
}


ReactDOM.render(
  <Applicacao />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
