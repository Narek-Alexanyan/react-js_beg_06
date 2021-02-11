import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RefreshIcon from '@material-ui/icons/Refresh';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement() {
        if (this.state.count === 0) {
            this.setState({
                count: 0
            })
        } else {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <IconButton onClick={(e) => this.increment(e)} aria-label="Increment" size="medium">
                    <AddIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={(e) => this.decrement(e)} aria-label="decrement" size="medium">
                    <RemoveIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={(e) => this.reset(e)} aria-label="reset" size="medium">
                    <RefreshIcon fontSize="inherit" />
                </IconButton>
                <h1>Current Count: {this.state.count}</h1>
                <hr></hr>
            </div>
        )
    }
}

export default Counter;
