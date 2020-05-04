import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { createSelector } from 'reselect'
import { filterUserBy, allUserVisible } from '../redux/uservisibility/visibilityAction'
import { fetchUsers } from '../redux/user/userActions'

const users = state => state.users.users
const visibility = state => state.visibility.allVisible
const searchKeyword = state => state.visibility.searchKeyword

const userSelector = createSelector(
    users,visibility,searchKeyword,
    (users, visibility, searchKeyword ) => {
        return visibility ? users : users.filter(user => user.username.includes(searchKeyword)) 
    }
)

function UsingReactReduxHooks() {

    const users = useSelector(state => userSelector(state))
    const isNotFiltered  = useSelector(state => visibility(state))
    const searchedKeyword = useSelector(state => searchKeyword(state))

    const dispatch = useDispatch()
    // const searchKeyword = userSelector(state => state.visibility.searchKeyword)
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        dispatch(fetchUsers())   
    }, [dispatch]) 

    return (
        <div>
            <div>
                <input placeholder='search username' onChange = {event => setKeyword(event.target.value)} value = {keyword}/>
                <button onClick = {() => dispatch(filterUserBy(keyword))}>Filter Username</button>
                <button onClick = {() => dispatch(allUserVisible())}>Remove Filter</button>
            </div>
            <div>
                {isNotFiltered? <h2>All usernames</h2> : <h2>Username filtered by - {searchedKeyword}</h2>}
                {users && users.map(user => <p key={user.id}>{user.username}</p>)}
            </div>
        </div>
    )
}

export default UsingReactReduxHooks
