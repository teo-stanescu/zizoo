// action creators
export const updateBoats = (boats) => {
    // return an action
    return {
        type: 'UPDATE_BOATS',
        payload: boats
    };
};

export const filterBoatLength = (range) => {
    return {
        type: 'FILTER_BOAT_LENGTH',
        payload: range
    }
}

export const filterGuestsNumber = (slider) => {
    return {
        type: 'FILTER_GUESTS_NUMBER',
        payload: slider
    }
}

export const filterBoatYear = (age) => {
    return {
        type: 'FILTER_BOAT_YEAR',
        payload: age
    }
}