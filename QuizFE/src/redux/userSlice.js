import { createSlice } from "@reduxjs/toolkit"

const initialState = { //wag kalimutan ibalik sa empty string
    User:{
        Username: 'admin',
        Role: 'admin'
    }
}

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.User = action.payload
        },
        logout: (state) => {
            state.User = initialState.User;
        }
    }
})

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer