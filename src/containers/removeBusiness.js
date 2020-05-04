import  { connect } from "react-redux";
import { removeBusiness } from '../redux/actions';



const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (business) => dispatch(removeBusiness(business)),
    }
}

export default connect(null, mapDispatchToProps)(removeBusiness)