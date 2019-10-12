import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { filterBoatYear } from '../../actions';

const YearFilter = (props) => (
    <Form>
        <Form.Field>
            Boat year:
        </Form.Field>
        <Form.Field>
            <Radio
                label='> 2010'
                name='radioGroup'
                value='young'
                checked={props.radio === 'young'}
                onChange={(e, { value }) => props.filterBoatYear(value)}
        />
        </Form.Field>
        <Form.Field>
            <Radio
                label='< 2010'
                name='radioGroup'
                value='old'
                checked={props.radio === 'old'}
                onChange={(e, { value }) => props.filterBoatYear(value)}
        />
        </Form.Field>
    </Form>
);

const mapStateToProps = state => {
    return {
        radio: state.boatYear
    }
}

export default connect(mapStateToProps, { filterBoatYear })(YearFilter);