import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
    const { instructionsExpanded } = props;

    if (instructionsExpanded) {
        return (
            <div>
                <h3>Instruções</h3>
                <p>Bem vindo ao evens or odds. O jogo funciona assim</p>
                <p>O baralho será embaralhado. Então você deve escolher: a próxima carta será par ou ímpar?</p>
                <p>Faça sua escolha a cada carta virada, e veja quantas você consegue acertar!</p>
                <p>PS: Coringas não contam</p>
                <br />
                <button onClick={props.collapseInstructions}>Não mostrar</button>
            </div>
        )
    };

    return (
        <div>
            <h3>Instruções</h3>
            <p>Bem vindo ao evens or odds. O jogo funciona assim...</p>
            <br />
            <button onClick={props.expandInstructions}>Mostrar mais</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())
    }
}

const mapStateToProps = state => {
    return {
        instructionsExpanded: state.instructionsExpanded
    }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(Instructions);