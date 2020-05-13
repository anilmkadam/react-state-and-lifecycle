import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            err => console.log(err.message)
        );
    return (
        <div>
            <SeasonDisplay />
        </div>
    );
    } 
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);