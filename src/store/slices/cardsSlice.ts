import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICard, ICardState} from "../../types/cards";

const initialState: ICardState = {
    cards: [],
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setNewCard: (state, action: PayloadAction<ICard[]>) => {
            return {...state, cards: action.payload}

        },
    },
});

export const { setNewCard } = cardsSlice.actions;

export default cardsSlice.reducer;
