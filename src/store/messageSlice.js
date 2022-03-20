import { createSlice } from "@reduxjs/toolkit";

export const messageSilce = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            if(action.payload==="" || action.payload===null)
                return
            const newMessages = [...state.messages]
            newMessages.push(action.payload)
            state.messages = newMessages
        }
    }
})

export const {addMessage} = messageSilce.actions

export default messageSilce.reducer