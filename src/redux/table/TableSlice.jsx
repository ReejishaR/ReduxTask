import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
    name: 'table',
    initialState:{
        users:[],
    },

    reducers: {
        addTable: (state, action) => {
            state.users.push(action.payload);
        },
        editTable: (state, action) => {
            const { id, name, email, phone } = action.payload;
            const editingData = state.users.find(data => data.id === id);
            if (editingData) {
                editingData.name = name;
                editingData.email = email;
                editingData.phone = phone;
            }
        },
        deleteTable: (state, action) => {
            const { name } = action.payload;
            const index = state.users.findIndex(data => data.name === name);
            if (index !== -1) {
                state.users.splice(index, 1);
            }
        }
    },
});

export const { addTable, editTable, deleteTable } = tableSlice.actions;
export default tableSlice.reducer;
