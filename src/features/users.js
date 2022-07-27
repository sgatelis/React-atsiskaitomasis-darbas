import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: {
            users: []
        }
    },
    reducers: {
        addUser: (state, action) => {
            state.value.users.push(action.payload) 
        }, 
        updateUsers: ({value}, {payload}) => {
            value.users = payload
        }
        
    }
    
})


export const {addUser, updateUsers} = userSlice.actions
export default userSlice.reducer
