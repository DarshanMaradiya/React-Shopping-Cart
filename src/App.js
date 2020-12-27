import React, { Component } from 'react';
import Counters from './Components/counters';
import NavBar from './Components/navbar';

class App extends Component {
    state = { 
        counters : [
            {id : 1, value : 0},
            {id : 2, value : 0},
            {id : 3, value : 0},
            {id : 4, value : 0}
        ]
     };

    onIncrement = (counter) => {
        let counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState( {counters} );
    }

    onDelete = (counter) => {
        const counters = this.state.counters.filter(c => c.id !== counter.id);
        this.setState( {counters} );
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    }

    render() { 
        return ( 
        <React.Fragment>
            <NavBar distinctItems={ this.state.counters.filter(c => c.value > 0).length }/>
            <main>
                <button className="btn btn-primary m-2" onClick={ this.handleReset }>Reset</button>
                <Counters counters={ this.state.counters } onIncrement={ this.onIncrement } onDelete={ this.onDelete }/>
            </main>
        </React.Fragment>
        );
    }
}
 
export default App;