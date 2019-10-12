import { combineReducers } from 'redux';

const boatsReducer = (boats = null, action) => {
    if (action.type === 'UPDATE_BOATS') {
        return action.payload;
    }

    return boats;
};

const boatLengthRangeReducer = (range = [0,20], action) => {
    if (action.type === 'FILTER_BOAT_LENGTH') {
        return action.payload;
    }

    return range;
}

const guestsNumberReducer = (slider = 2, action) => {
    if (action.type === 'FILTER_GUESTS_NUMBER') {
        return action.payload;
    }

    return slider;
}

const boatYearReducer = (age = 'young', action) => {
    if (action.type === 'FILTER_BOAT_YEAR') {
        return action.payload;
    }

    return age;
}

export default combineReducers({
    boats: boatsReducer,
    boatLengthRange: boatLengthRangeReducer,
    guestsNumber: guestsNumberReducer,
    boatYear: boatYearReducer
})