import React from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

function UsingMemoizedSelectorWithProp({prefix, filteredUsers}) {
    console.log('filteredUser',filteredUsers)
    return (
        <div>
            <h2>Usernames starting with - {prefix}</h2>
            {filteredUsers && filteredUsers.map(user => <p key={user.id}>{user.username}</p>)}
        </div>
    )
}

const makeGetFilteredUsersSelector = () => {
    return createSelector(
        state => state.users,
        (_,props) => props.prefix,
        (users,prefix) => users.filter(user => user.username.indexOf(prefix)===0)
    )
}

const makeMapStateToProps = () => {
    const getFilteredUserSelector = makeGetFilteredUsersSelector()
    const mapStateToProps = (state,props) => {
        console.log('mapStateToProps',state,props)
        return {
            filteredUsers: getFilteredUserSelector(state,props)
        }
    }
    return mapStateToProps
}

export default connect(makeMapStateToProps)(UsingMemoizedSelectorWithProp)