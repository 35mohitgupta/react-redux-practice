import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h3>No of Cakes - {props.noOfCakes}</h3>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes: state.noOfCakes
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }

const mapDispatchToProps = {
    buyCake
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
