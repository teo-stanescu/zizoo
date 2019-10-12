import gql from 'graphql-tag';

export const GET_BOAT_LIST = gql`
    query getFilteredBoatList {
        getBoats (input: {active: true}) {
            name,
            type,
            active,
            guests,
            length,
            price,
            imageUrl,
            year
        }
    }
`