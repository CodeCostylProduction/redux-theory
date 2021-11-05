import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import {number} from "prop-types";

class App extends Component {

    render() {
        return (
            <div className={'App'}>
                <h1>Счетчик <strong>{this.props.counter}</strong></h1>

                <hr/>

                <div className="Actions">
                    <button onClick={this.props.onAdd}>Добавить 1</button>
                    <button onClick={this.props.onSub}>Вычесть 1</button>
                    <button onClick={() => this.props.onDouble( 15)}>Умножить на 15</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD'}),
        onSub: () => dispatch({type: 'SUB'}),
        onDouble: number => dispatch({type: 'DOU', payload: number})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
