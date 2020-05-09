import React from 'react'
import '../redux/state'
import { Container, Paper, Chip } from '@material-ui/core';


const Business = (props) => {
    const id = props.match.params.id
    console.log(id)
    const business = props.businesses.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{business.Name}</h2>
                {
                    Object.keys(business).map((key, idx) => {
                        return <Chip label={`${key}: ${business[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>

    )
}

export default Business