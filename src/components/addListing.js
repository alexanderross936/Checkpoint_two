import React from 'react';
import { InputLabel } from '@material-ui/core'
import { Input } from '@material-ui/core'
import { FormControl } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import '../redux/state';

class addListing extends React.Component {

    state = {
        name: '',
        description: '',
        address: '',
        hours: ''
    }


    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        console.log("THE BUSINESS", payload)
        this.props.addListing(payload)
        console.log(this.props)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',
                address: '',
                hours: ''
            })
        }
    }

    render(){
        return (
            <div className="App">
                <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    name="name"
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="description" 
                                    name="description"
                                    placeholder="Description" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    name="address"
                                    placeholder="Address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
                                    name="hours"
                                    placeholder="Hours" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
            </div>
          );
    }
 
}

export default addListing;
