import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
    return (
        <div>
            <SeasonDisplay />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);