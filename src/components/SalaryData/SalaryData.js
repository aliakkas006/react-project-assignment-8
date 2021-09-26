import React from 'react';

const SalaryData = props => {
    const { ceoName, salary } = props.company;
    return (
        <ul>
            <li> {ceoName} </li>
            <p>__ Salary: {salary} BDT.</p>
        </ul>
    );
};

export default SalaryData;