import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Main from './pages/Main';
import SearchResults from './pages/SearchResults'


const backgroundImage = require('../assets/images/main_background.jpg');

const App = () => (
    <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundRepeat: 'no-repeat' }}>
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={Main} />
                    <Route path="/search" component={SearchResults} />
                </div>
            </BrowserRouter>
        </div>
    </div>
);

export default App;