import React from 'react';
// import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

import ResultsItem from './ResultsItem';
// import { updateBoats } from '../../actions';

export default class ResultsList extends React.Component {
    render() {
        return (
            <Grid stackable columns={3}>
                {this.props.data.map(item => (
                    <Grid.Column key={item.name}>
                        <ResultsItem data={item} />
                    </Grid.Column>
                ))}
            </Grid>
        )
    }
}

// const mapStateToProps = state => {\
//     return {
//         boats: state.boats
//     }
// }

// export default connect(mapStateToProps, { updateBoats })(ResultsList); 