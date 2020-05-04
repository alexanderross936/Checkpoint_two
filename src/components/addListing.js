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

    toggleDialog = () => this.setState({ open: !this.state.open })


    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        delete payload.open
        console.log("THE BUSINESS", payload)
        // add this.props.addCar function here
        this.props.addListing(payload)
        // also add this.setState to close the dialog
        this.setState({ open: false })
        console.log(this.props.value)
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
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="description" 
                                    placeholder="Description" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="Address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
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
