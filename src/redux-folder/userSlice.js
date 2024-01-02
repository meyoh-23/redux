import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Kelvin",
        email: "mimiMeyoh@gmail.com",
        greeting: ""
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state) => {
            state.email = null;
            state.greeting= null;
            state.name = null;
        },
        addHello: (state, action) => {
            state.greeting = "Hello  " + action.payload.name
        }
    },
});

export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;