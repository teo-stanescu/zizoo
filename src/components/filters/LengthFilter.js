import React from 'react';
import Range from 'rc-slider/lib/Range';
import { connect } from 'react-redux';

import { filterBoatLength } from '../../actions';

const LengthFilter = (props) => (
    <div>
        <p>Boat length</p>
        <Range
            min={0}
            max={20}
            pushable={true}
            defaultValue={props.range}
            onAfterChange={(range) => props.filterBoatLength(range)}
        />
        <p>{props.range[0]} - {props.range[1]}</p>
    </div>
)

const mapStateToProps = state => {
    return {
        range: state.boatLengthRange
    }
}

export default connect(mapStateToProps, { filterBoatLength })(LengthFilter);