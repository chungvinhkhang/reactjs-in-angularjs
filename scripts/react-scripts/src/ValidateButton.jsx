import React from 'react';

const styles = {
    color: 'red',
    fontWeight: 'bold'
};

function ValidateButton() {

    function validate() {
        const arr = [];
        const angular = window.angular; 
        const scope = angular.element(document.querySelector('[ng-controller=myCtrl]')).scope();
        const { firstName, lastName } = scope;
        if(firstName.length === 0) {
            arr.push('first name');
        }if(lastName.length === 0) {
            arr.push('last name');
        }
        if(arr.length > 0) alert(`Please input ${arr.join(',')}`);
    }

    return <button style={styles} onClick={validate}>Validate</button>;
}

export { ValidateButton }