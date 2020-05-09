import { connect } from 'react-redux'
import Listing from '../components/Listing'
import { removeListing } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        user: state.user.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (business) => dispatch(removeListing(business)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)
