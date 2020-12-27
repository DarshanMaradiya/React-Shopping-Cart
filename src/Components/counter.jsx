import React, { Component } from 'react';

class Counter extends Component {
    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    render() { 
        return ( 
            <div>
            <span className={ this.getBadgeClasses() }>{ this.props.counter.value === 0 ? "Zero" : this.props.counter.value }</span>
            <button className="btn btn-secondary btn-sm m-2" onClick = { () => this.props.onIncrement(this.props.counter) }>Increment</button>
            <button className="btn btn-danger btn-sm m-2" onClick = { () => this.props.onDelete(this.props.counter) }>Delete</button>
            </div>
         );
    }
}
 
export default Counter;