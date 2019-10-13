import React from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { filterBoatLength, filterGuestsNumber, updateBoats, filterBoatYear } from '../../actions';
import { GET_BOAT_LIST } from '../../apollo';
import LengthFilter from '../filters/LengthFilter';
import GuestsFilter from '../filters/GuestsFilter';
import ResultsList from '../results/ResultsList';
import YearFiler from '../filters/YearFiler';

class SearchResults extends React.Component {

    render() {
        return (
            // <Grid stackable columns={2}>
            //     <Grid.Row>
            //         <Grid.Column width={4}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Menu vertical style={{ maxHeight: "22em", minWidth: "11em", marginRight: 20 }}>
                    <Menu.Item>
                        <LengthFilter />
                    </Menu.Item>
                    <Menu.Item>
                        <GuestsFilter />
                    </Menu.Item>
                    <Menu.Item>
                        <YearFiler />
                    </Menu.Item>
                </Menu>
                <Query query={GET_BOAT_LIST}>
                    {({ loading, error, data, refetch }) => {
                        if (loading) return <h2 style={{ alignSelf: "center", justifyContent: "center", flex: 1, display: 'flex' }}>Loading ...</h2>;
                        if (error) return <div>Oops! Something went wrong!</div>
                        // this.props.updateBoats(data.getBoats);
                        let filteredData = data.getBoats.filter(item =>
                            (item.length >= this.props.range[0] &&
                                item.length <= this.props.range[1] &&
                                item.guests >= this.props.guests &&
                                ((this.props.age === "young" && item.year >= 2010) ||
                                    (this.props.age === "old" && item.year < 2010))
                            )
                        )
                        return (
                            <ResultsList data={filteredData} /> //could have also saved data in Redux. as on line 39
                        );
                    }}
                </Query>
            </div>
            //         </Grid.Column>
            //     </Grid.Row>
            // </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boats: state.boats,
        range: state.boatLengthRange,
        guests: state.guestsNumber,
        age: state.boatYear
    };
}

export default connect(mapStateToProps, {
    updateBoats,
    filterBoatLength,
    filterGuestsNumber,
    filterBoatYear
})(SearchResults)