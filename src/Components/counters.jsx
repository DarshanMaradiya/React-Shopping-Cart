import React, { Component } from 'react';
import Counter from './counter';

const Counters = (props) => {
        return ( 
            <div>
            { props.counters.map(counter => (
                <Counter key={counter.id} counter={counter} onIncrement={props.onIncrement} onDelete={props.onDelete}/>
            )) }
            </div>
        );
    }
 
export default Counters;