import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectCards} from "../../store/selectors/cardsSelectors";
import {generateRandomId} from "../../utils/randomIdGenerator";
import {setNewCard} from "../../store/slices/cardsSlice";

export const useHeader = () => {
    const cardsData = useAppSelector(selectCards);
    const dispatch = useAppDispatch();

    const handleAdd = () => {
        const existingIds = cardsData.map(({id}) => id)
        const newCard = {id: generateRandomId(existingIds)}
        dispatch(setNewCard([...cardsData, newCard]))
    }

    const handleSort = () => {
        const sortedCards = [...cardsData].sort((a, b) => a.id - b.id)
        dispatch(setNewCard(sortedCards));
    }

    return { cardsData, handleAdd, handleSort }
};
