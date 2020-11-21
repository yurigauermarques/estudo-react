import React from 'react';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            dissertacao: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.',
            favorito: 'coco'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Nome: ' + this.state.nome);
        alert('Dissertação: ' + this.state.dissertacao);
        alert('Favorito: ' + this.state.favorito);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input name="nome" type="text" value={this.state.nome} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Dissertação
                    <textarea name="dissertacao" value={this.state.dissertacao} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Escolha seu sabor favorito:
                    <select name="favorito" value={this.state.favorito} onChange={this.handleInputChange}>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Coco</option>
                        <option value="manga">Manga</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default NameForm;