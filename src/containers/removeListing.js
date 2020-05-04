import  { connect } from "react-redux";
import { removeListing } from '../redux/actions';



const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (business) => dispatch(removeListing(business)),
    }
}

export default connect(null, mapDispatchToProps)(removeListing)