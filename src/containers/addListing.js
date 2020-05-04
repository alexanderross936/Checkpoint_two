import  { connect } from "react-redux";
import { addListing } from '../redux/actions';
import AddListing from '../components/addListing'



const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (business) => dispatch(addListing(business)),
    }
}

export default connect(null, mapDispatchToProps)(AddListing)