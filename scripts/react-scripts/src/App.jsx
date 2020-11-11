import {  ValidateButton } from "./ValidateButton";
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <div>
        <ValidateButton />
    </div>
}

const domContainer = document.querySelector('#divValidateContact');
ReactDOM.render(<App />, domContainer);