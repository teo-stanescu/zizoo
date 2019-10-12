import React from 'react';
import 'rc-slider/assets/index.css';
import { Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import LengthFilter from '../filters/LengthFilter';
import GuestsFilter from '../filters/GuestsFilter';
import YearFiler from '../filters/YearFiler';

export default class Main extends React.Component {

    render() {
        return (
            <div className="ui container" style={{ marginTop: '25%' }}>
                <h3 style={{ textAlign: "center", marginBottom: 20 }}>
                    How will you enjoy your next trip?
                </h3>
                <div className="ui segment">
                    <Grid columns={4} divided textAlign="center" verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <LengthFilter />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <GuestsFilter />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <YearFiler />
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <Link to="/search">
                                    <Icon name="search" color="black" />
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
