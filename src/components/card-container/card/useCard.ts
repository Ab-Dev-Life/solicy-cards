import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {selectCards} from "../../../store/selectors/cardsSelectors";
import {setNewCard} from "../../../store/slices/cardsSlice";

export const useCard = (id?: number) => {
    const cardsData = useAppSelector(selectCards);
    const dispatch = useAppDispatch();

    const handleRemove = () => {
        const newCards = cardsData.filter(({id: cardId}) => cardId !== id)
        dispatch(setNewCard(newCards))
    }
    return { cardsData, handleRemove }
};
