import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    questions: [],
    user:{
        username: 'John Doe',
        role: "admin"
    }
}

const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers:{
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        }
    }
})

export default questionSlice.reducer