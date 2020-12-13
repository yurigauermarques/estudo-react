import React from "react";
import Dialog from "./Dialog";

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' }
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Bem-vindo a bordo, ${this.state.login}!`);
    }


    render() {
        return (
            <Dialog
                title="Programa de Exploração de Marte"
                message="Como gostaria de ser chamado?"
            >
                <input
                    value={this.state.login}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleSignUp}>
                    Cadastre-se!
                </button>
            </Dialog>
        );
    };
}

export default SignUpDialog;