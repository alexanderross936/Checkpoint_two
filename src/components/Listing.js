import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { CardActions } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import addListing from '../containers/addListing'
import removeListing from '../containers/removeListing'
import businesses from '../redux/state'
import user from '../redux/state';
import cookie from 'cookie'
import '../Router'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}
 
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
                        <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/business/${businesses.id}`}>See More Details</Link>
                    </CardActions>
                    { checkAuth() ? 
                                                <DeleteIcon
                                                // add onClick method here
                
                                                // onClick={props.removeCar(idx)}
                                                className="icon text-red" 
                                                onClick={ () => props.removeListing(idx)}
                                                /> : ' '
                }

                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing