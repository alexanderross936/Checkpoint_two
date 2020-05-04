import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import addListing from '../containers/addListing'
import removeListing from '../containers/removeListing'
import businesses from '../redux/state'
import user from '../redux/state';

 
const Listing = (props) => {
    console.log(props.businesses)
    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((businesses, idx) => (
                    <TableRow key={businesses.id}>
                        <TableCell component="th" scope="row">
                            
                        </TableCell>
                        <TableCell>{businesses["name"]}</TableCell>
                        <TableCell>{businesses["description"]}</TableCell>
                        <TableCell>{businesses["address"]}</TableCell>
                        <TableCell>{businesses["hours"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here

                                // onClick={props.removeCar(idx)}
                                className="icon text-red" 
                                onClick={ () => this.props.removeListing(idx)}
                                />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing