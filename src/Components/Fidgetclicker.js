import React from 'react';

class Fidgetclicker extends React.Component{
    constructor(){
        super();
        this.state = {
            number: 0
        }
    }

    increment = () => {
        this.setState({
            number: this.state.number + 1
        })
        if (this.state.number >= 10){
            this.setState({
                number: 0
            })
        }
    }

    decrement = () => {
        this.setState({
            number: this.state.number - 1
        })
        if (this.state.number <= 0){
            this.setState({
                number: 0
            })
        }
    }

    clear = () => {
        this.setState({
            number: this.state.number = 0
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.decrement()}> - </button>
                <button onClick={() => this.clear()}> clear </button>
                <button onClick={() => this.increment()}> + </button>
            </div>
        )
    }
}

export default Fidgetclicker