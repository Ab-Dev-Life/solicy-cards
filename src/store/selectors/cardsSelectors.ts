import {RootState} from "../store";

export const selectCards = (state: RootState) => state.cardsData.cards;
