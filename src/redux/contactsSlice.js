import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    ],
    reducers: {
        addContact: (state, action) => {
            state.unshift({
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number,
            });
        },
        deleteContact: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;


