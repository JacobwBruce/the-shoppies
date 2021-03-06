import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LeaderBoards from './components/LeaderBoards';

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/leaderboards' component={LeaderBoards} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
