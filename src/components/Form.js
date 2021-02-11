import React from 'react';

import TextField from '@material-ui/core/TextField';
import './Form.scss'


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: ''
        }
    }

    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({
            [nam]: val
        })
    }


    render() {
        return (
            <>
                <form>
                    <TextField id="standard-basic" label = "Name" name="name"  onChange={this.handleChange} />
                    <span>{ this.state.name }</span>
                    <br/>
                    <TextField id="standard-basic" label = "lastName" name="lastName"  onChange={this.handleChange}/>
                    <span>{ this.state.lastName }</span>
                </form>
            </>
        )
    }
}

export default  Form;
