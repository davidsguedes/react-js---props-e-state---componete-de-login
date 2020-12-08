import React, { Component } from 'react';

class UsuarioEntrada extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input id="usuarioEntrada" type="text" onChange={event => this.props.setNameSaida(event)} />
            </div>
        );
    }

}


class UsuarioSaida extends Component {
    constructor() {
        super();
        this.state = { nameSaida: ''};
    }

    setNameSaida = (event) => {
        this.setState({ nameSaida: event.target.value });
    }


    render() {
        return (
            <div>
                <UsuarioEntrada setNameSaida={this.setNameSaida}/>
                <p>Usuário: {this.state.nameSaida}</p>
                <p>Texto qualquer.</p>

            </div>
        );
    }
}

export default UsuarioSaida;