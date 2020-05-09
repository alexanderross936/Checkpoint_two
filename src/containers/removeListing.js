import  { connect } from "react-redux";
import { removeListing } from '../redux/actions';




const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (business) => dispatch(removeListing(business)),
    }
}

export default connect(null, mapDispatchToProps)(removeListing)