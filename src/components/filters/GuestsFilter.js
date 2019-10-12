import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import { connect } from 'react-redux';

import { filterGuestsNumber } from '../../actions';

const GuestsFilter = (props) => (
    <div style={{ flexDirection: "row"}}>
        <p>Guests</p>
        <Slider
            min={1}
            max={20}
            defaultValue={props.guests}
            onAfterChange={(slider) => props.filterGuestsNumber(slider)}
        />
        <p>{props.guests}</p>
    </div>
)

const mapStateToProps = state => {
    return {
        guests: state.guestsNumber
    }
}

export default connect(mapStateToProps, { filterGuestsNumber })(GuestsFilter);