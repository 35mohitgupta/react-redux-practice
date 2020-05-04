import React, { useEffect } from 'react'
import { fetchUsers } from '../redux/user/userActions'
import {connect} from 'react-redux'

function UserContainer({loading, users, error, fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    },[fetchUsers])
    return (
        loading?<h2>LOADING...</h2>:
        error? <h2>{error}</h2>:
        (
            <div>
                <h2>Usernames ...</h2>
                <div>
                    {users && users.map(user => <p key={user.id}>{user.username}</p>)}
                </div>
            </div>
    
    )
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
