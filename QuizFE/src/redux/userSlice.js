import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
    User:{
        Username: null,
        Role: null
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